import uuid from 'uuid';
const ageReducer = (state={age:0,history:[]},action) =>{
    switch(action.type)
    {
        case 'AGE_UP':
            return {...state,
                age:++state.age,
                history:state.history.concat({age:state.age,id:uuid.v4()})
            }
        case 'AGE_DOWN':
            return { ...state,
                age:--state.age,
                history:state.history.concat({age:state.age,id:uuid.v4()})
            }
        case 'DELETE_AGE':
            return{
                ...state,
                history:state.history.filter((item) => item.id !== action.key )
            }
        default:
            return state;
            
    }
}

export default ageReducer;