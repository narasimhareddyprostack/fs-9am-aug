import React, { Component } from "react";
import Axios from "axios";
class User extends Component {
  constructor(props) {
    super(props);
    console.log("First -constructor");
  }
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log("Second -render ");
    return <div></div>;
  }
}

export default User;
