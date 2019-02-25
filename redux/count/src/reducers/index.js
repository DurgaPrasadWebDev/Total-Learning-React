import {combineReducers} from 'redux';

const counterReducer = (state={count:10},action) =>
{
    var nextState = Object.assign({},state);
    switch(action.type)
    {
        case 'ADD':
            nextState.count = nextState.count+1;
            return nextState;
        default :
            return state;
    }
}

export default combineReducers({counter:counterReducer});