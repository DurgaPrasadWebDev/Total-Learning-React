import React from 'react'
import { connect } from 'react-redux';

import { ADD , MINUS, RESET } from '../action'

class  ButtonAction extends React.Component {
    render(){
    console.log(this.props);
    console.log(this.props.count);
  return (
    <div>
         
      <button onClick={() => this.props.ADD()}>add</button>
      <button onClick={() => this.props.MINUS()}>minus</button>
      <button onClick={() => this.props.RESET()}>reset</button>
      <h1>Count is Now: {this.props.count}</h1>   
    </div>
  )
    }
}

const mapStateToProps = (state) =>
{
    console.log(state);
    return {count:state.count}
}

export default connect(mapStateToProps,{ADD, MINUS, RESET})(ButtonAction) ;