import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Home'
import Kid from './Kid'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/kid" component={Kid}/>
            <Route  path="/kid/:kid" component={Kid}/>
            <Route  path="/kid/:kid" component={Kid}/>
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App
