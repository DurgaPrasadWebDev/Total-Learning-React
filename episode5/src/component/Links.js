import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Links extends Component {
  render() {
    return (
      <div>
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/other">other</NavLink>
            <NavLink to="/contact">contact</NavLink>
            <NavLink to="/about">About</NavLink>    
            <NavLink to="/login">login</NavLink>
        </nav>
      </div>
    )
  }
}

export default Links
