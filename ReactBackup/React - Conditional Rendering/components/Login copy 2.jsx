import React, { Component } from "react";

export class Login extends Component {
  state = {
    flag: false,
  };
  updateHandler = () => {
    this.setState({ flag: !this.state.flag });
  };
  render() {
    return (
      <div>
        {!this.state.flag ? (
          <>
            <button onClick={this.updateHandler}>Login</button>
          </>
        ) : (
          <>
            <button onClick={this.updateHandler}>Logout</button>
          </>
        )}
      </div>
    );
  }
}

export default Login;
