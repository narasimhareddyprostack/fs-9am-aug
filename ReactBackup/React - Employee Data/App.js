import React from "react";
import Navbar from "./Navbar/Navbar";
import Counter from "./components/Counter";
import Employee from "./components/Employee";
import "./assets/css/super.css";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Counter />
        <Employee />
      </React.Fragment>
    );
  }
}
export default App;
