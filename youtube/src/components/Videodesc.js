import React, { Component } from 'react'
import './Videodesc.css'
class Videodesc extends Component {
      
  render() {
    return (
      <div className="videodesc">
      <h1>{this.props.desc.snippet.description}</h1>
      </div>
    )
  }
}

export default Videodesc
