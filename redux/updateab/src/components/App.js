import React, { Component } from 'react'
import { connect } from 'react-redux';

import { UPDATE_A, UPDATE_B } from '../actions'

class App extends Component {
  render() {
    return (
      <div>
        <div>
            <h1>A:{this.props.a}</h1>
            <button onClick={() => this.props.updateA(this.props.b)}>updateA</button>
        </div>
        <div>
            <h1>B:{this.props.b}</h1>
            <button onClick={() => this.props.updateB(this.props.a)}>updateB</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>
{
    console.log('a',state.updatea.a);
    console.log('b',state.updateb.b);
    return {a:state.updatea.a,b:state.updateb.b}
}

const mapDispatchToProps = (dispatch) =>
{
    return{
        updateA: (value) => dispatch(UPDATE_A(value)),
        updateB: (value) => dispatch(UPDATE_B(value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
