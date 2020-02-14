const redux=require('redux');
const createStore=redux.createStore;
const buy_Cake=buy_Cake;
const buy_Ice=buy_Ice;

function buycake(){
    return{
        type:buy_Cake,
        info:'first redux action'
    }
}

function buyice(){
    return{
        type:buy_Ice,
        info:'first redux action'
    }
}

const initialCakeState = {
    numofCakes:10  
}

const initialIceState = {
    numofIce:20
}

const cakeReducer = (state=initialCakeState,action)=>{
    switch(action,type){
        case buy_Cake:return{
            ...state,
            numofCakes:state.numofCakes-1

        }
        default:return state
    }
}

const iceReducer = (state=initialIceState,action) =>{
    switch(action,type){
        case buy_Ice:return{
            ...state,
            numofIce:state.numofIce-1
        }
        default :return state
    }
}

const store=createStore(iceReducer)
 store=createStore(cakeReducer)
console.log('Initial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log('update state',sto.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyice())
store.dispatch(buyice())
unsubscribe()