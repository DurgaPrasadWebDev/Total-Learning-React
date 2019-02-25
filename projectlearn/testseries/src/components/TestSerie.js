import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class TestSerie extends Component {
  render() {
    return (
      <div>
        <NavLink  to="/testseries">
        <button className="ui button">
        Create Test Serie
        </button>
        </NavLink>
        <br />
        <br />
        <NavLink  to="/testseriesPattern">
        <button className="ui button">
        Create Test Serie Patern
        </button>
        </NavLink>
      </div>
    )
  }
}

export default TestSerie;
