
// here we are installing redux
// Redux to use create store
// Action generators are function that create the function returns the object
// Reducres are the pure function 

// lets take a look to the Redux
//In this example we are taking counter and do the action like increment ,decrement, set and reset the counter values


// 2 Action Generators


const increment =({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
  })
  
  const decrement =({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
  })
  
  const reset=()=>({
    type:'RESET'
  })
  
  const set=({payload=0}={})=>({
    type:'SET',
    payload
  })
  
  //Reducres
  
  const countReducer =((state = defaultState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.incrementBy
        }
      case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        }
      case 'RESET':
        return {
          count: 0
        }
      case 'SET':
        return {
          count: action.payload
        }
      default:
        return state
    }
  })
  
  
  // 1 creating store 
  
  const defaultState = { count: 0 }
  const store = createStore(countReducer)
  
  //subscribing store
  
  store.subscribe(()=>{
    console.log(store.getState())
  })
  
  // calling the action
  
  //dispatching action to store
  store.dispatch(increment({incrementBy:10}))
  store.dispatch(decrement({decrementBy:1}))
  store.dispatch(reset())
  store.dispatch(set({payload:10111}))
  
  let x={a:'asd',b:12,c:454}
  console.log({...x,j:'4545'})
  
  