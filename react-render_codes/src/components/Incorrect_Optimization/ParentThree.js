import React from 'react'
import { useState } from 'react'
import { MemoChildThree } from './ChildThree';

export const ParentThree = () => {
  const[count, setCount] = useState(0);
  const[name, setName] = useState('Guru');

  console.log('Rendering ParentThree...');
  return (
    <div>
        <button onClick={() => setCount(nc => nc+1)}>Count - {count}</button><br/>
        <button onClick={() => setName('ReactDev')}>Change Name</button><br/>
        <MemoChildThree name={name}>
            <strong>Hello</strong>
        </MemoChildThree>
    </div>
  )
}
