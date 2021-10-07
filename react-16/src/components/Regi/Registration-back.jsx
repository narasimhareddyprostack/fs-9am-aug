import React, { Component } from "react";

class Registration extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  updateForm = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };
  submitHandler = (event) => {
    // event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
          <label>User Name</label>
          <input type="text" name="username" onChange={this.updateForm} />{" "}
          <br />
          <label>Email</label>
          <input type="text" name="email" onChange={this.updateForm} /> <br />
          <label>Password</label>
          <input type="text" name="password" onChange={this.updateForm} />{" "}
          <br />
          <input type="submit" value="Registration" />
        </form>
      </div>
    );
  }
}

export default Registration;
