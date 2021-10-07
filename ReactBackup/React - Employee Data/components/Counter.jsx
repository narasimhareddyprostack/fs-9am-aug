import React from "react";

class Counter extends React.Component {
  state = { obj: { qty: 1, opt_qty: 200 }, message: "Hello" };
  incrHandler = () => {
    this.setState({ obj: { ...this.state.obj, qty: this.state.obj.qty + 1 } });
  };
  render() {
    return (
      <div>
        <h1>QTY : {this.state.obj.qty}</h1>
        <h1>Message :{this.state.message}</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.incrHandler}>INCR</button>
      </div>
    );
  }
}

export default Counter;
