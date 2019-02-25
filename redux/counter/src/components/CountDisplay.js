import React from 'react'
import { connect } from 'react-redux';

function CountDisplay(props) {
  return (
    <div>
        <h1>Count is Now: {props.count}</h1>
    </div>
  )
}

const mapStateToProps = (state) =>
{
    return {count:state.count}
}

export default connect(mapStateToProps)(CountDisplay);