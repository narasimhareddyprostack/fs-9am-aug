import React from "react";
import Navbar from "./Navbar/Navbar";
import Registration from "./components/Regi/Registration";
import Login from "./components/Login/Login";
import Employee from "./components/Employee/Employee";
import "./assets/css/super.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <hr />
          <Switch>
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/data" component={Employee} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
