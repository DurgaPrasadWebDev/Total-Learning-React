import React, { Component } from 'react'
import { connect } from 'react-redux';

import DisplayHistory from './DisplayHistory';
import { AGE_UP, AGE_DOWN} from '../actions'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Age:{this.props.age}</h1>
        <button onClick={this.props.AgeUp}>AgeUp</button>
        <button onClick={this.props.AgeDown}>AgeDown</button>
        <DisplayHistory />
      </div>
    )
  }
}

const mapStateToProps = (state) =>
{
    return {age:state.age};
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        AgeUp: () => dispatch(AGE_UP()),
        AgeDown: () => dispatch(AGE_DOWN())    
    }
        
     
}

export default connect(mapStateToProps,mapDispatchToProps)(App);