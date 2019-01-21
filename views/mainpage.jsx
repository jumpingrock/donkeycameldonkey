var React = require("react");
var Defaultlayout = require('./default/default');

class mainPage extends React.Component {
  render() {

    let new_array = this.props.list.map((currentVal) => { //appending into array using map
      //console.log(this.props.user)
      return(
        <div className='col-md-4 col-sm-6 col-lm-3'>
          <a href={"/"+currentVal.retailer+"/"+currentVal.productid}><img src={currentVal.product_pic} width='200px' height='200px'/></a>
          <a href={"/"+currentVal.retailer+"/"+currentVal.productid}><h4>{currentVal.product_name} ${currentVal.price}</h4></a>
          <h4>{currentVal.promo_text}</h4>
          <h4>{currentVal.retailer}</h4>
          <form action={"/"+this.props.username+"/"+currentVal.productid} method='POST'>
            <input type='hidden' name='name' value={currentVal.productid}/>
            <input type='submit'  className='btn btn-secondary'  value='Add to comparison'></input>
          </form>
        </div>
      )
    });
    
    return (
      <Defaultlayout>
        <div>
        <div className="col">
        </div>
        <div className="col-12">
          <div className="row">
            {new_array}
          </div>
        </div>
        <div className="col">
          
        </div>
        </div>
      </Defaultlayout>
    );
  }
}

module.exports = mainPage;
