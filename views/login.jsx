var React = require("react");
var Defaultlayout = require('./default/default');
class login extends React.Component {
  render() {

    //console.log(this.props.list[0]);

    return (
      <Defaultlayout>
        <form action='/login' method='POST'>
          <div className="form-group row">
            <label for="username" class="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input type="text" name='username'className="form-control" id="inputEmail3" placeholder="Username"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" name='password' className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                <label className="form-check-label" for="gridCheck1">
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit"  className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
      </Defaultlayout>
    );
  }
}

module.exports = login;