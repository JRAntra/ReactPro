import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";
import React, { Component } from "react";

export default class App extends Component {
//   state = {
//     text: "subscribe",
//     subscribe : true,
//   };
constructor(){
    super()
    this.state = {
            text: "subscribe",
            subscribe : true,
            name:"JR",
          };
}

  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ subscribe: !this.state.subscribe, name:"David" });
          }}
        >
          {this.state.subscribe ? "subscribe" : "unsubscribe"}
        </button>
      </div>
    );
  }
}
