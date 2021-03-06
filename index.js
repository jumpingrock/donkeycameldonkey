const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const pg = require('pg');
const sha256 = require('js-sha256');
const SALT = 'wearethechampions'
/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

const configs = {
  user: 'kennethyeong',
  password: '11111',
  host: '127.0.0.1',
  database: 'project2', 
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

// Init express app
const app = express();


// Set up middleware
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true
}));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);
app.use(express.static(__dirname + '/views/default'));

/**
 * ===================================
 * Routes
 * ===================================
 */

// Root GET request (it doesn't belong in any controller file)
app.get('/', (request, response) => {
//   console.log('in mainpage get / page');
  const queryString = 'SELECT * FROM products';
  pool.query(queryString, (error, queryResult) => {
    if (error){
      console.log(error);
    }else{
      // get the currently set cookie
      var visits = request.cookies['visits'];
      var usernameCheck = request.cookies['username']
      //console.log(request.cookies['username'])
      // see if there is a cookie
      if( visits === undefined ){
        // set the cookie
        visits = 1;
        response.cookie('visits', visits);
        response.redirect('/login');
        // respond by redirecting to new user creation 
        //response.send('welcome to project2');
      }else{
        // if a cookie exists, make a value thats 1 bigger
        visits = parseInt( visits ) + 1;
        response.cookie('visits', visits); 
        //console.log(queryResult.rows);
        response.render('mainpage.jsx', {list: queryResult.rows, username : request.cookies['username']});
      }
    }
       
  });
});
// * ===================================
  //allow user to log in
app.get('/login', (request, response) => {
  response.render('login');

});
app.post('/login', (request, response)=>{
  //if username and password match those in database log them in
  let query = `SELECT * FROM users WHERE userid = '${request.body.username}'`;//request username from form in webpage

  pool.query(query, (err, queryResponse) => {
    console.log('query response', queryResponse.rows);

    if (queryResponse.rows.length === 0){
      //console.log('user does not exist');
      response.send("<html><body><h3>User does not exist!</h3><br /><button><a href='/'>Home</a></button><button><a href='/login'>Back to Login Page</a></button>");
    
    }else {
      //console.log('user exist');
      //console.log(queryResponse);
      let user = queryResponse.rows[0];
      let hashedPassword = sha256(user.pword);
      var formHashedPassword = sha256(request.body.password);
      
      // comparing hashed password to see if pword match with form. 
      if (formHashedPassword === hashedPassword){
        var username = user.userid
        var hashedCookie = sha256(user.userid+SALT);
        //console.log('HASHED COOKIEEEEE   '+hashedCookie);
        response.cookie('loggedin', 'true');
        response.cookie('username', username);
        response.redirect('/');
      }else {
        response.send("<html><body><h3>Incorrect password!</h3><br /><button><a href='/'>Home</a></button><button><a href='/login'>Back to Login Page</a></button>");
      }
    }
  });
})
// * ===================================
//SELECT * FROM products WHERE retailer ='NTUC' AND productid = 'kss';
app.get('/:retailer/:id', (request, response)=>{ 
  //creation of dynamic URL using retailer and productid as active input. 
  let id = request.params.id
  let retailer = request.params.retailer
  let query = `SELECT * FROM products WHERE productid = '${id}'`;
  let newArray = [];
  pool.query(query, (err, queryResult) =>{
    for (let i=0; i< queryResult.rows.length; i++){//select the primary item and display as first item by pushing into new array
      if(queryResult.rows[i].retailer === retailer){
        newArray.push(queryResult.rows[i])
      }
    }
    for(let i=0; i< queryResult.rows.length; i++){//append all other item that share the same productid
      if(queryResult.rows[i].retailer !== retailer){
        newArray.push(queryResult.rows[i])
      }
    }

    response.render('products.jsx', {list: newArray});
    //console.log(queryResult.rows)
 });
})

// * ===================================
// adding products and routing to user page
app.get('/:username', (request, response) => {
  
  let query = `SELECT * FROM itemfollowed WHERE userid = '${request.cookies['username']}'`
  pool.query(query, (error, queryResult) => { //first pool query to sql table itemfollowed
    console.log('above if else')
    if (error){// if else ran 2 times without looping very strange
      console.log(error);
    }else{// if else ran 2 times without looping very strange
      console.log(queryResult.rows);
      let values = [];
      var prodQuery = `SELECT * FROM products WHERE productid IN `; //setting up for 2nd pool.query to sql table products
      for(let i=0; i<queryResult.rows.length;i++){
        if (i<1){
          prodQuery = prodQuery + `('${queryResult.rows[i]['productid']}'`;
        }else{
          prodQuery = prodQuery + ` , '${queryResult.rows[i]['productid']}'`;
        }
      }
      prodQuery = prodQuery + ')';
      console.log(prodQuery);
      pool.query(prodQuery,(error, result) =>{
        if(error){
          console.log(error);
        }else{
          //console.log(result);
          response.render('userpage', {list: result.rows});
        }
      })
      
    }
       
  });

  
});

app.post('/:username/:productid',(request,response)=>{
  console.log('hi      ', request.body)
  let values = [request.cookies['username'], request.body.name];
  let query = 'INSERT INTO itemFollowed (userid, productid) values ($1, $2)';
  
  console.log(request.cookies['username'], request.body.name);
  
  pool.query(query, values, (error, queryResult) => {
    console.log(values)
    if (error){
      console.log(error);
    }else{
      console.log(queryResult.rows);
      response.redirect(`/{request.param.username}`);
      
    }
       
  });
  //response.render('userpage');
});

app.delete('/delete/:id',(request,response)=>{
  let query = `DELETE FROM products WHERE id = '${request.params.id}'`;
  console.log(request.params.id)

  pool.query(query, (error, queryResult) => {
    //console.log(values)
    
    if (error){
      console.log(error);
    }else{
      console.log(queryResult.rows);
      
    }  
  response.send(`ITEM DELETED`); 
  });
});

app.get('/userregistration', (request, response) => {
  console.log('this is register gettttt')
  response.render('userregisterationjajaj');
});

app.post('/userregistration',(request,response)=>{
  console.log('this is register posssttttt')
  let values = [request.body.username, request.body.name];
  let query = 'INSERT INTO user (userid, pword) values ($1, $2)';
  
  console.log(request.body.username, request.body.password);
  
  pool.query(query, values, (error, queryResult) => {
    console.log(values)
    if (error){
      console.log(error);
    }else{
      console.log(queryResult.rows);
      //response.redirect(`/{request.param.username}`);
      
    }
       
  });
  response.render('userregistrationjajaja');
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */

const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
let onClose = function(){

  server.close(() => {
    console.log('Process terminated')
    pool.end( () => console.log('Shut down db connection pool'));
  })
};