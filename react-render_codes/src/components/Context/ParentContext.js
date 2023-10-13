import React from 'react'
import { useState } from 'react'
import { ChildA, MemoChildA } from './ChildrenContext';

export const CountContextRef = React.createContext();
const CountContextProvider = CountContextRef.Provider;

export const ParentContext = () => {
  const[count, setCount] = useState(0);
  console.log('Rendering Parent Context...');

  return (
    <div>
        <button onClick={() => setCount(nc => nc+1)}>ParentContext Count - {count}</button>
        <CountContextProvider value={count}>
            {/* <ChildA/> */}
            <MemoChildA />
        </CountContextProvider>
    </div>
  )
}
