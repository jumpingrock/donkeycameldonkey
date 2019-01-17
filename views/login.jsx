var React = require("react");

class login extends React.Component {
  render() {

    console.log(this.props.list[0]);

    return (
      <html>
        <head />
        <body>
          <h2>DONKEY CAMEL DONKEY</h2>
          <form className="user-form" method="POST" action="/users">
            <div className="user-attribute">
              name<input name="name" type="text" />
            </div>
            <div className="user-attribute">
              password:<input name="password" type="text" />
            </div>
            <input name="submit" id="newusercre8" type="submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = login;