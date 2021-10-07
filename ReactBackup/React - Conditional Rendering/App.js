import React from "react";
import Navbar from "./Navbar/Navbar";
/* import Login from "./components/Login";
import Food from "./components/Food"; */
import "./assets/css/super.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <hr />
        <Login />
        <Food />
      </React.Fragment>
    );
  }
}
export default App;
