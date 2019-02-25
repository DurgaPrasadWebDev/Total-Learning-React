import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash'

const singReducer = (state={isSignIN:null,userId:null},action) =>{
    switch(action.type){
        case 'SING_IN':
            console.log("reducer",action.payload)
            return {...state,isSignIN:true,userId:action.payload};
        case 'SING_OUT':
        return {...state,isSignIN:false,userId:null};
        default :
            return state;
    }
}

const streamReducer = (state={},action) => {
    switch(action.type){
        case 'STREAM_CREATE':
            return {...state,[action.payload.id]:action.payload};
        case 'STREAM_EDIT':
            return {...state,[action.payload.id]:action.payload};
        case 'STREAM_GET_ONE':
            return {...state,[action.payload.id]:action.payload};
        case 'STREAM_DELETE':
            return _.omit(state,action.payload)
        case 'STREAM_GET_ALL':
            return {...state,..._.mapKeys(action.payload,'id')};
        default :
            return state;
    }
}
export default combineReducers({sing:singReducer,form:formReducer,stream:streamReducer})