import React, { Component } from 'react'

function Navbar(){
    return (
        <><div>Navbar</div><Child></Child></>
    )
}
const Child = () => {
    return (
        <div>child</div>
    )
}
function Swiper(){
    return <div>Swiper</div>
}
function Tabbar(){
    return <div>Tabbar</div>
}




export default class App extends Component {
  render() {
    return (
      <>
      <Navbar></Navbar>
      <Swiper></Swiper>
      <Tabbar></Tabbar>
       </>
      
    )
  }
}

