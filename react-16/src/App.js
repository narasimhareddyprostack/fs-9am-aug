import React from "react";
import Navbar from "./Navbar/Navbar";
import Registration from "./components/Regi/Registration";
import "./assets/css/super.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <hr />
        <Registration />
      </React.Fragment>
    );
  }
}
export default App;
