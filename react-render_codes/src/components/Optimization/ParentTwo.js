import React from 'react'
import { useState } from 'react'
import { MemoChildTwo } from './ChildTwo';

export const ParentTwo = () => {
  const[count, setCount] = useState(0);
  const[name, setName] = useState('Guru');

  console.log('Rendering ParentTwo...');
  return (
    <div>
        <button onClick={() => setCount(nc => nc+1)}>Count - {count}</button><br/>
        <button onClick={() => setName('ReactDev')}>Change Name</button><br/>
        {/* <ChildTwo name={name}/> */}
        <MemoChildTwo name={name}/>
    </div>
  )
}
