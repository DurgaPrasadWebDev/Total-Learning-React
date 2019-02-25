function counterReducer(state,action)
{
    if( state === undefined)
    {
        return {count:0};    
    }
    var nextState = state;
    switch(action.type)
    {
        case 'ADD':
            nextState.count = state.count + 1;
            return nextState;
            break;
        case 'MINUS':
            nextState.count = state.count - 1;
            return nextState;
            break;
        case 'REST':
            nextState.count = 0;
            return nextState;
            break;
        default:
            return state;    
    }
}

var store = Redux.createStore(counterReducer)
var headEl = document.getElementById('count');

function render()
{
    var state = store.getState();
    headEl.innerHTML = state.count.toString();
}

store.subscribe(render);
                                        
document.getElementById('add')
 .addEventListener('click',function(){
    store.dispatch({type:'ADD'});    
})

document.getElementById('minus')
 .addEventListener('click',function(){
    store.dispatch({type:'MINUS'});    
})

document.getElementById('reset')
 .addEventListener('click',function(){
    store.dispatch({type:'REST'});    
})



