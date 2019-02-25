import Streamapi from "../api";
import history from '../history';

export const SignIN = (userId) => {
    console.log("user",userId)
    return {type:'SING_IN',payload:userId}
}

export const SignOut = () => {
    return {type:'SING_OUT'}
}

export const CreateStream = formValues => async (dispatch,getState) => {
    const { userId } = getState().sing;
   const response = await Streamapi.post('/streams',{...formValues,userId});
   dispatch({type:'STREAM_CREATE',payload:response.data});
   history.push("/")

}

export const EditStream = (id,formValues) => async dispatch =>{
    const response = await Streamapi.patch(`/streams/${id}`,formValues    );
    dispatch({type:'STREAM_EDIT',payload:response.data});
    history.push("/") 
}

export const GetStreams = () => async dispatch =>{
    const response = await Streamapi.get('/streams');
    dispatch({type:'STREAM_GET_ALL',payload:response.data})
}

export const GetStream = (id) => async dispatch =>{
    const response = await Streamapi.get(`/streams/${id}`);
    dispatch({type:'STREAM_GET_ONE',payload:response.data});
}

export const DeleteStream = (id) => async dispatch =>{
    await Streamapi.delete(`/streams/${id}`);
    dispatch({type:'STREAM_DELETE',payload:id});
    history.push("/");
}