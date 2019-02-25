import React, { Component } from 'react'
import "./Navbar.css"
class Navbar extends Component {
  render() {
    return (
    <div className="hd">
        
        <nav>
            <div className="logo">Logo</div>
            <ul>
                <li><a href="www.google.com">home</a></li>
                <li><a href="www.google.com">about</a></li>
                <li><a href="www.google.com">blog</a></li>
                <li><a href="www.google.com">contact</a></li>
                <li><a href="www.google.com">login</a></li>
            </ul>        
        </nav>
    </div>
    )
  }
}

export default Navbar;
