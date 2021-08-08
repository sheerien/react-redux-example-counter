import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseAction, decreaseAction } from "./store/actions";
import "./assets/main.css";
import "./App.css";
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="counter">
          <div className="row">
            <button onClick={this.props.increase}>+</button>
            <span>{this.props.count}</span>
            <button onClick={this.props.decrease}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.countReducer.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increaseAction),
    decrease: () => dispatch(decreaseAction),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
