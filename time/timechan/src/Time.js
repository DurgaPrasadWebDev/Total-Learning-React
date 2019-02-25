import React, { Component } from 'react';

class Time extends Component {
    state = {time : new Date().toLocaleTimeString()};
    componentDidMount()
    {
        setInterval(() => {
            this.setState({time:new Date().toLocaleTimeString()})
        },1000)
    };
  render() {
    return (
      <div>
       <h1>The time now = {this.state.time} </h1>  
      </div>
    )
  }
}

export default Time;
