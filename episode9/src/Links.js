import React, { Component,Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import './Links.css'
export class Links extends Component {
  render() {
    return (
        <Fragment>
        <NavLink to="/home" className="link">Home</NavLink>
        <NavLink to="/kid" className="link">Kid</NavLink>
        <NavLink to="/kid/one" className="link">one</NavLink>
        <NavLink to="/kid/two" className="link">two</NavLink>
        </Fragment>
     )
  }
}

export default Links
