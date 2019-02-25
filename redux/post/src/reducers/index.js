import { combineReducers } from 'redux';

const postReducer = (state=[],action) => {
    switch(action.type){
        case 'FECH_POST':
            return action.payload;
        default :
            return state;
    }
}

const userReducer = (state=[],action) =>
{
    switch(action.type)
    {
        case 'FECH_USER':
            return [...state,action.payload];
        default :
            return state;
    }
}

export default combineReducers({posts:postReducer,users:userReducer})