import React, { Component } from 'react'
 import {Route} from 'react-router-dom'
//import Home from './component/Home'
class Linkpath extends Component {
  render() {
    return (
        
        <Route path={this.props.path} component={this.props.com}/>
    )
  }
}

export default Linkpath
