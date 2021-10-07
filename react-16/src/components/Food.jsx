import React, { Component } from "react";

class Food extends Component {
  state = {
    food: "no food",
  };
  breakHandler = () => {
    this.setState({
      food: "breakfast",
    });
  };
  lunchHandler = () => {
    this.setState({
      food: "lunch",
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="form-check form-check-inline">
                <input type="checkbox" onChange={this.breakHandler} />
                <label for="checkbox3">Break Fast</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" onChange={this.lunchHandler} />
                <label for="checkbox3">Lunch</label>
              </div>
            </div>
            <div className="col-md-8">
              <pre>{JSON.stringify(this.state)}</pre>
              {this.state.food === "breakfast" ? (
                <>
                  {" "}
                  <div className="card">
                    <div className="card-header">
                      <h2>Break Fast</h2>
                    </div>
                    <div className="card-body"></div>
                  </div>
                </>
              ) : null}
              {this.state.food === "lunch" ? (
                <>
                  {" "}
                  <div className="card">
                    <div className="card-header">
                      <h2>Lunch</h2>
                    </div>
                    <div className="card-body"></div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Food;
