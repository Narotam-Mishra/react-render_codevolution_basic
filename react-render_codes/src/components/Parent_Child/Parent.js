import React, { useState } from 'react'
import { Child } from './Child';

export const Parent = () => {
  const[count, setCount] = useState(0);
  console.log('Parent Render works...');

  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count {count}</button><br/>
        <button onClick={() => setCount(0)}>Count Reset</button><br/>
        <button onClick={() => setCount(5)}>Count to 5</button>
        <Child />
    </div>
  )
}
