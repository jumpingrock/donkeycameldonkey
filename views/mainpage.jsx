var React = require("react");
var Defaultlayout = require('./default/default');
class mainPage extends React.Component {
  render() {

    let new_array = this.props.list.map((currentVal) => {
      return(
        <div className='col-md-3'>
          <a href={"/"+currentVal.retailer+currentVal.product_name}><img src={currentVal.product_pic} width='200px' height='200px'/></a>
          <a href={"/"+currentVal.retailer + currentVal.product_name}><h4>{currentVal.product_name} ${currentVal.price}</h4></a>
          <h4>{currentVal.promo_text}</h4>
          <h4>{currentVal.retailer}</h4>
        </div>
      )//appending into array 
    })

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
