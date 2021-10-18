import React, { Component } from "react";
class Counter extends Component {
  state = {
    counter: 1,
  };
  updateCounterHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Counter:{this.state.counter}</h2>
        <button onClick={this.updateCounterHandler}>update</button>
      </div>
    );
  }
}

export default Counter;
