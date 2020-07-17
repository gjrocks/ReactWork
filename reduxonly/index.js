const {createStore}=require('redux');

const intitalState={
    age:21
}

const myReducer=(state=intitalState,action)=>{
const newState={...state};
switch(action.type){
    case 'ADD':
        newState.age=newState.age+action.val;
}
return newState;
}

const store=createStore(myReducer);



store.subscribe(()=>{
    console.log("state changed :" +JSON.stringify(store.getState()));
})

store.dispatch({type:'ADD', val:10});
console.log(store.getState());