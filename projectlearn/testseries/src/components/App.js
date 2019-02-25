import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import TestSerie from './TestSerie'
import CreateTestSeries from './CreateTestSeries'
import CreateTestSeriesPatter from './CreateTestSeriesPatter'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Switch>
                <Route path="/testseries" component={CreateTestSeries}/>
                <Route path="/testseriesPattern" component={CreateTestSeriesPatter}/>
                <Route path="/" component={TestSerie} />
            </Switch>
        </BrowserRouter>  
      </div>
    )
  }
}
