import React, { Component } from 'react'
import Header from '.Header'
import Navbar from './Navbar'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar /> 
        <Main /> 
      </div>
    )
  }
}

export default App
