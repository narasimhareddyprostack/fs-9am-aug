import React, { Component } from "react";
import Axios from "axios";
export class User extends Component {
  state = {
    user: [],
    errorMessage: "",
  };
  getUserData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((response) => {
        this.setState({ errorMessage: "Error Messsage" });
      });
  };
  render() {
    return (
      <div>
        <h1>Displaying Data</h1>
        <pre>{JSON.stringify(this.state.user)}</pre>
        <button onClick={this.getUserData}>User Data</button>
      </div>
    );
  }
}

export default User;
