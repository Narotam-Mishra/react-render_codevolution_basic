import React, { useCallback, useMemo } from 'react'
import { useState } from 'react'
import { MemoChildSix } from './ChildSix';


export const ParentSix = () => {
  const[count, setCount] = useState(0);
  const[name, setName] = useState('Guru');

  const person = {
    fName : 'John',
    lName : 'Gilbert'
  }

  const memoPerson = useMemo(() => person, []);

  const handleClick = () => {
    console.log('Click Handler...');
  }

  const memoHandleClick = useCallback(handleClick, []);

  console.log('Rendering ParentSix...');
  return (
    <div>
        <button onClick={() => setCount(nc => nc+1)}>Count - {count}</button><br/>
        <button onClick={() => setName('ReactDev')}>Change Name</button><br/>
        <MemoChildSix name={name} person={memoPerson} clickHandler={memoHandleClick}/>
    </div>
  )
}
