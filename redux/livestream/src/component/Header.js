import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth'

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
            Streammy         
        </Link>
        <Link to="/">
            All Streams         
        </Link>
        <GoogleAuth />
      </div>
    )
  }
}

export default Header;
