import React, { Component } from 'react';
class Count extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        count:0   
      };
    };
    Increament()
    {
        this.setState(
            (prevState) => ({count:prevState.count+1}) 
        );
    };
    
  render() {
    return (
      <div>
        <h1>Count : {this.state.count} </h1>
        <button onClick={() => this.Increament()}>Increase</button>
      </div>
    )
  }
}

export default Count;
