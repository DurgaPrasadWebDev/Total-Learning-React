import React, { Component } from 'react'
import Navbar from './Navbar';
import Content from './Content';
import "./App.css"
class App extends Component {
  render() {
    return (
      <div className="bd">
        <Navbar />
        <Content />
      </div>
    );
  };
};

export default App;
