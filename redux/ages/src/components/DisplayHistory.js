import React, { Component } from 'react'
import { connect } from 'react-redux'

import { DELETE_AGE } from '../actions'

class DisplayHistory extends Component {
  render() {
    return (
      <div>
        {this.props.history.map((item) => <h1 key={item.id} onClick={() => this.props.DelteAgeFromHistory(item.id)}>{item.age}</h1>)}
      </div>
    )
  }
}

const mapStateToProps = (state) =>
{
    return{history:state.history}
}

const mapDispatchToProps = (dispatch) =>
{
    return{
        DelteAgeFromHistory: (id) => dispatch(DELETE_AGE(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DisplayHistory);
