import React, { Component } from "react";

class Login extends Component {
  state = {
    message: "",
    flag: false,
  };
  loginHanlder = () => {
    this.setState({ message: "Welcome to PSA", flag: true });
  };
  logoutHandler = () => {
    this.setState({ message: "Visit Again", flag: false });
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h2>Welcome Message:{this.state.message}</h2>
        {!this.state.flag ? (
          <>
            <button
              className="btn btn-success mr-4"
              onClick={this.loginHanlder}
            >
              Login
            </button>
          </>
        ) : null}
        {this.state.flag ? (
          <>
            <button className="btn btn-danger" onClick={this.logoutHandler}>
              Logout
            </button>
          </>
        ) : null}
      </div>
    );
  }
}

export default Login;
