import { combineReducers } from 'redux';

const songsReducer = () =>{
    return [
        {title:"durga",duration:"4.65"},
        {title:"naga",duration:"4.53"},
        {title:"prasad",duration:"2.65"},
        {title:"mohan",duration:"3.65"},
        {title:"sai",duration:"1.65"}
    ]
}

const selectesongReducer = (selectsong = null,action) =>{
    if(action.type === 'SELECT_SONG')
    {
        return action.payload;
    }
    return selectsong;
}

export default combineReducers({songs:songsReducer,selectsong:selectesongReducer})