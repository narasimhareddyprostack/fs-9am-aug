import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            Redux Example
          </Link>

          <Link to="/message" className="navbar-brand">
            Message
          </Link>
        </nav>
      </>
    );
  }
}
export default Navbar;
