import React, { Component } from 'react'
import {BrowserRouter,Switch} from 'react-router-dom';
import Linkpath from './Linkpath'
import Home from './component/Home';
import Other from './component/Other'
import About from './component/About'
import Login from './component/Login'
import Contact from './component/Contact'

class App extends Component {
  render() {
      
         /*{path1 : "/other"},
          {path1 : "/about"},
          {path1 : "/login"},
  {path1 : "/contact"}*/
    return (
      <BrowserRouter>
        <Switch>
            {
                [{p:"/home",pa:Home},
                {p:"/other",pa:Other},
                {p:"/about",pa:About},
                {p:"/other",pa:Login},
                {p:"/contact",pa:Contact}].map((item)=>{return <Linkpath path={item.p} com={item.pa} />})}
            
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
