import React, { Component } from 'react'

export default class App extends Component {
    a = 100

  render() {
    return (
      <div>
        <input />
        <button onClick={ ()=>{
            console.log('click1',this.a)
        }}>add1</button>

        <button onClick={this.handleClick2.bind(this)}>add2-NOT RECOMMENDED</button>
        <button onClick={this.handleClick3}>add3-RECOMMENDED</button>
        <button onClick={()=>this.handleClick4()}>add4-RECOMMENDED-PASS PARAMETER</button>


      </div>
    )
  }

  handleClick2(){
    console.log("click2",this.a)
  }

  handleClick3 = (evt) => { 
    console.log("click3",this.a,evt)
  }

  handleClick4 = () => {
    console.log("click4",this.a)

  }
}
