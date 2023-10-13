import React from 'react'
import { useState } from 'react'
import { MemoChildFive } from './ChildFive';

export const ParentFive = () => {
  const[count, setCount] = useState(0);
  const[name, setName] = useState('Guru');

//   const person = {
//     fName : 'John',
//     lName : 'Gilbert'
//   }

  const handleClick = () => {
    console.log('Click Handler...');
  }

  console.log('Rendering ParentFive...');
  return (
    <div>
        <button onClick={() => setCount(nc => nc+1)}>Count - {count}</button><br/>
        <button onClick={() => setName('ReactDev')}>Change Name</button><br/>
        <MemoChildFive name={name} clickHandler={handleClick}/>
    </div>
  )
}
