import React from "react";

class Counter extends React.Component {
  state = { obj: { qty: 1 } };
  incrHandler = () => {
    this.setState({ obj: { qty: this.state.obj.qty + 1 } });
  };
  render() {
    return (
      <div>
        <h1>QTY : {this.state.obj.qty}</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.incrHandler}>INCR</button>
      </div>
    );
  }
}

export default Counter;
