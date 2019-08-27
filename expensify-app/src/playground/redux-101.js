import { createStore } from 'redux'

// action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count = 1 } = {} ) => ({
  type: 'SET',
  count
})

// REDUCERS
// 1. Reducers are pure functions
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      }
    case "DECREMENT": {
      return {
        count: state.count - action.decrementBy
      }
    }
    case "SET": {
      return {
        count: action.count
      }
    }
    case "RESET": {
      return {
        count: 0
      }
    }
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({ 
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

// store.dispatch({ 
//   type: "INCREMENT"
// });

store.dispatch(incrementCount())

// store.dispatch({ 
//   type: "RESET"
// });
store.dispatch(resetCount())

// store.dispatch({ 
//   type: "DECREMENT",
//   decrementBy: 10
// });
store.dispatch(decrementCount({ decrementBy: 10 }))

// store.dispatch({ 
//   type: "DECREMENT"
// });
store.dispatch(decrementCount())

// store.dispatch({
//   type: "SET",
//   count: 101
// })
store.dispatch(setCount({ count: 101 }))