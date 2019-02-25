import React, { Component } from 'react';
import {Router , Route,Switch } from 'react-router-dom';

import StreamCreate from './stream/StreamCreate';
import StreamEdit from './stream/StreamEdit' ;
import StreamList from './stream/StreamList';
import StreamShow from './stream/StreamShow';
import StreamDelete from './stream/StreamDelete';
import history from '../history';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div>
     
        <Router history={history}>
        
            <div>
            <Header />
            <Switch>
            <Route path="/"  exact component={StreamList} />
            <Route path="/streams/new"  exact render={() => <StreamCreate/>} />
            <Route path="/streams/edit/:id"  exact component={StreamEdit} />
            <Route path="/streams/:id"  exact component={StreamShow} />
            <Route path="/streams/delete/:id"  exact component={StreamDelete} />
            </Switch>
            </div>
        </Router> 
      </div>
    )
  }
}

export default App;
