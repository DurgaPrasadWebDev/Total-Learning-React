
function counterReducer(state,action)
{
    if(state === undefined)
    {
        return {count:0};
    }
    var nextState = state;
    switch(action.type)
    {
        case  'ADD':
            nextState.count = nextState.count + 1;
            return nextState;
            break;
        case 'MINUS':
            nextState.count = nextState.count - 1 
            return nextState;
            break;
        case 'RESET':
            nextState.count=0;
            return nextState;
            break;
        default :
            return state;
            break;
    }
}

function itemReducer(state,action)
{
    if(state === undefined)
    {
        return {itemarr:[]};
    }
    var nextState = Object.assign({},state);
    switch(action.type)
    {
        case 'NEW':
            nextState.itemarr.push(action.payload);
            return nextState;
            break;
        case 'DELETE':
            nextState.itemarr.pop();
            return nextState;
            break;
        case 'DELETEALL':
            nextState.itemarr = [];
            return nextState;
            break;
    }
}


var hEl = document.getElementById('counttext');
var ulEl = document.getElementById('itemlist');
var inputEl = document.getElementById('inputtext');

reducerofex = Redux.combineReducers({itemReducer:itemReducer,counterReducer:counterReducer})

var store = Redux.createStore(reducerofex)

function render()
{
    var state = store.getState();
    hEl.innerHTML = state.counterReducer.count;
    renderList(state);
}

function renderList(state)
{
    console.log(state);
    ulEl.innerHTML=""
    state.itemReducer.itemarr.map((item) => {
        var li = document.createElement('li');
        li.innerHTML=item;
        ulEl.appendChild(li);
    })

}




document.getElementById('addNumber').addEventListener('click',
function(){
    console.log("hai");
    store.dispatch({type:'ADD'});
})

document.getElementById('minusNumber').addEventListener('click',
function(){
    console.log("hai");
    store.dispatch({type:'MINUS'});
})

document.getElementById('resetNumber').addEventListener('click',
function(){
    console.log("hai");
    store.dispatch({type:'RESET'});
})



document.getElementById('newButton').addEventListener('click',
function(){
    console.log("hai");
    store.dispatch({type:'NEW',payload:inputEl.value});
})

document.getElementById('deleteButton').addEventListener('click',
function(){
    console.log("hai");
    store.dispatch({type:'DELETE'});
})

document.getElementById('deleteallButton').addEventListener('click',
function(){
    console.log("hai");
    store.dispatch({type:'DELETEALL'});
})


