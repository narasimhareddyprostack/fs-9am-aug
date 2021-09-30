import React from "react";

import Navbar from "./Navbar/Navbar";
import Product from "./component/Product";
import Wish from "./component/Wish";
import "./assets/css/super.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Product />
        <h4 />
        <Wish />
      </React.Fragment>
    );
  }
}
export default App;
