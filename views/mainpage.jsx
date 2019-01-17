var React = require("react");

class mainPage extends React.Component {
  render() {

    console.log(this.props.list[0]);
    let new_array = this.props.list.map((currentVal) => {
      return(
        <div className='col-md-2'>
          <a href={"/"+currentVal.retailer + currentVal.product_name}><img src={currentVal.product_pic} width='200px' height='200px'/></a>
          <a href={"/"+currentVal.retailer + currentVal.product_name}><h4>{currentVal.product_name} ${currentVal.price}</h4></a>
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
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
          <link rel="stylesheet" href="default/styles.css"/>
          <title>Donkey Camel Donkey</title>
        </head>
        <body>
          <div>
            <h2>DONKEY CAMEL DONKEY</h2>
            <div class="container">
              <div class="row">
                {new_array}
              </div>
            </div>
          </div>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>

        </body>
      </html>
    );
  }
}

module.exports = mainPage;
