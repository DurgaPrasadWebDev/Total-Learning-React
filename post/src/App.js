import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './components/Post';
import PostSend from './components/PostSend'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostSend />
        <Post />
      </div>
    );
  }
}

export default App;
