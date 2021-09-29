import React from "react";
class Message extends React.Component {
  state = {
    message: "Hello......",
  };

  updateMessage = () => {
    console.log("two");
    this.setState({ message: "Good Morning" });
  };
  render() {
    console.log("one");
    return (
      <React.Fragment>
        <h3>{this.state.message}</h3>
        <button onClick={this.updateMessage}>GM</button>
      </React.Fragment>
    );
  }
}

export default Message;
