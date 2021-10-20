import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar/Navbar";
import User from "./components/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/user" component={User} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
