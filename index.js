const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const pg = require('pg');
const sha256 = require('js-sha256');
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
        response.render('mainpage.jsx', {list: queryResult.rows});
      }
    }
       
  });
  
});

app.post('/login', (request, response) => {
  //   console.log('in mainpage get / page');
    const queryString = 'SELECT * FROM users';
    pool.query(queryString, (error, queryResult) => {
      if (error){
        console.log(error);
      }
         
    });
    // get the currently set cookie
    var visits = request.cookies['visits'];
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
      console.log(queryResult.rows)
      response.render('mainpage.jsx', {list: queryResult.rows});
    }
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