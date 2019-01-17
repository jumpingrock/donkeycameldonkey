var React = require("react");

class mainPage extends React.Component {
  render() {

    console.log(this.props.list[0]);
    let new_array = this.props.list.map((currentVal) => {
      return(
        <div className='productContent'>
          <img src={currentVal.product_pic}/>
          <h4>{currentVal.product_name} ${currentVal.price}</h4>
          <h4>{currentVal.promo_text}</h4>
          <h4>{currentVal.retailer}</h4>
        </div>
      )
    })

    return (
      <html>
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <title>Donkey Camel Donkey</title>
        </head>
        <body>
          <div>
            <h2>DONKEY CAMEL DONKEY</h2>
            <div className='containerOfBoxes'>
              {new_array}
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = mainPage;
