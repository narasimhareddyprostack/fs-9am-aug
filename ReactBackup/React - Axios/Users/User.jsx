import React, { Component } from "react";
import Axios from "axios";
export class User extends Component {
  state = {
    user: [],
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch(() => {});
  }

  render() {
    return (
      <div>
        <h1>Displaying Data</h1>
        <pre>{JSON.stringify(this.state.user)}</pre>
      </div>
    );
  }
}

export default User;
