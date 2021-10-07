import React, { Component } from "react";

export class Login extends Component {
  state = {
    flag: true,
    value: "login",
  };
  updateHandler = () => {
    this.setState({
      flag: false,
      value: "Logout",
    });
  };
  render() {
    return (
      <div>
        {this.state.flag ? (
          <>
            <button onClick={this.updateHandler}>{this.state.value}</button>
          </>
        ) : (
          <button onClick={this.updateHandler}>{this.state.value}</button>
        )}
      </div>
    );
  }
}

export default Login;
