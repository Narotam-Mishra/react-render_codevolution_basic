import React, { useReducer } from 'react'

const intialState = 0

const reducer = (state, action) => {
    switch(action){
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return intialState
        default : return state
    }
}

export const UseReducer = () => {
  const[count, dispatch] = useReducer(reducer, intialState);
  console.log('UseReducer Render works...');

  return (
    <div>
        Count - {count}<br/>
        <button onClick={() => dispatch('increment')}>Increment</button><br/>
        <button onClick={() => dispatch('decrement')}>Decrement</button><br/>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}
