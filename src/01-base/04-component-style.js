import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  render() {
    var myname = "JR"
    var obj = {
        background:"yellow",
        fontSize:"20px"
    }
    return (
      <div>{10+20}-{myname}
      
      {10>20?'aaa':'bbb'}
        <div style={obj}>111111111</div>
        <div style={{backgroundColor:"red"}}>222222222</div>
        {/*
            React prefer to use inline style, and this is how you write comment in React
         */}
        <div className="active">333333333</div>
        <div id="myapp">4444444444</div>

        <label htmlFor="username">username</label>
        <input type="text" id="username"></input>

      </div>

    )
  }
}
