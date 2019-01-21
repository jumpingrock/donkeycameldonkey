var React = require("react");
var Defaultlayout = require('./default/default');
class login extends React.Component {
  render() {

    //console.log(this.props.list[0]);

    return (
      <Defaultlayout>
        <form className="user-form" method="POST" action="">
            <div className="user-attribute">
              name<input name="name" type="text" />
            </div>
            <div className="user-attribute">
              password:<input name="password" type="text" />
            </div>
            <input name="submit" id="newusercre8" type="submit" />
          </form>
      </Defaultlayout>
    );
  }
}

module.exports = login;