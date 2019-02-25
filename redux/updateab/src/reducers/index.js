import { combineReducers } from "redux";

const updateAReducer = (state={a:1},action) =>{
    switch(action.type)
    {
        case 'UPDATE_A':
            return {...state,a:state.a+action.valueb};
        default :
            return state;
    }

}

const updateBReducer = (state={b:1},action) =>{
    switch(action.type)
    {
        case 'UPDATE_B':
            return {...state,b:state.b+action.valuea};;
        default :
            return state;
    }
}

export default combineReducers({updatea:updateAReducer,updateb:updateBReducer})