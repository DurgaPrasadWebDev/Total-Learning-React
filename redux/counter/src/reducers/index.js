//import { combineReducers } from 'redux'

const counterReducer = (state={count:0},action) =>
{
    switch(action.type)
    {
        case 'ADD':
            state.count = state.count + 1;
            console.log(state)
            return state;
        case 'MINUS':
            state.count = state.count - 1;
            return state;
        case 'RESET':
            state.count = 0;
            return state;
        default :
            return state;
    }
}

export default counterReducer;