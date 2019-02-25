import jsonaplaceholder from '../api';
import _ from 'lodash';

export const fechPostAndUser = () => async (dispatch,getState) => {
    await dispatch(fechPost());

    const userIDs = _.uniq(_.map(getState().posts,'userId'));
    userIDs.map(id => dispatch(fechUser(id)));
}


export const fechPost = () => async dispatch => 
{
    //console.log("hai")
    const response = await jsonaplaceholder.get('/posts');
    //console.log(response)
    
    dispatch({type: 'FECH_POST',payload:response.data});
}

export const fechUser = (id) => async dispatch => {
    //console.log("api call ",id);
    const response = await jsonaplaceholder.get(`/users/${id}`);
    dispatch({type:'FECH_USER',payload:response.data})
}