import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import User from "./Users/User";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <nav>
            <Navbar />

            <Switch>
              <Route path="/user" component={User} />
            </Switch>
          </nav>
        </Router>
      </>
    );
  }
}
export default App;
