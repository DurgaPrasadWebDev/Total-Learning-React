import React, { Component } from 'react'
import { connect } from 'react-redux';

import { ADDNUM } from '../action'

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.ADDNUM()}>add</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>
{
    console.log(state);
    console.log('hai',state.counter);
    return {count:state.counter.count};
}
export default connect(mapStateToProps,{ADDNUM})(App);
