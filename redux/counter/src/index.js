import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import counterReducer from './reducers'

//import App from './components/App';
import ButtonAction from './components/ButtonAction';


ReactDOM.render(
    <Provider store={createStore(counterReducer)}>
        <ButtonAction />
    </Provider>,
    document.getElementById('root')
    );