import React from 'react'
import { useState } from 'react'
import { MemoChildFour } from './ChildFour';

export const ParentFour = () => {
  const[count, setCount] = useState(0);
  const[name, setName] = useState('Guru');

  console.log('Rendering ParentFour...');
  return (
    <div>
        <button onClick={() => setCount(nc => nc+1)}>Count - {count}</button><br/>
        <button onClick={() => setName('ReactDev')}>Change Name</button><br/>
        <MemoChildFour name={name}/>
    </div>
  )
}
