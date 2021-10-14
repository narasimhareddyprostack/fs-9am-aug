import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
            React Routing
          </a>
          <a href="/home" className="navbar-brand">
            Employee Data
          </a>
          <a href="/home" className="navbar-brand">
            Login
          </a>
          <a href="/home" className="navbar-brand">
            Registration
          </a>
        </nav>
      </>
    );
  }
}
export default Navbar;
