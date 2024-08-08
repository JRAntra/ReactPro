import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: ["111", "222", "333"],
  };

  render() {
    return <div>
        <ul>
            {this.state.list.map((item)=>{ return <li k ey={item}>{item}</li>})}
        </ul>
    </div>;
  }
}
