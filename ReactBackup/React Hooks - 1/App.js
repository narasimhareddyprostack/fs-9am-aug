import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar/Navbar";
import Counter from "./components/Counter";
import Message from "./components/Message";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/message" component={Message} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
