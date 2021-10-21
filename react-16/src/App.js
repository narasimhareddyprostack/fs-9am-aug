import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Message from "./component/Message/Message";
import { store } from "./redux/store";
import { Provider } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/message" component={Message} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}
export default App;
