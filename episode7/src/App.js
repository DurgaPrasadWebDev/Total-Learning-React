import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
      super(props)
      this.Myref=React.createRef()
    }
    increament = () =>
    {
        let num = this.Myref.current.value;
        num++
        this.Myref.current.value=num;
    }
  render() {
    return (
      <div>
            <input type="text" defaultValue={0} ref={this.Myref} />
            <button onClick={this.increament}>click</button>
      </div>
    )
  }
}

export default App
