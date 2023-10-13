import React from 'react'
import { useState } from 'react'

export const CountContextRef = React.createContext();
const CountContextProvider = CountContextRef.Provider;

export const ParentContext2 = ({children}) => {
  const[count, setCount] = useState(0);
  console.log('Rendering Parent Context2...');

  return (
    <div>
        <button onClick={() => setCount(nc => nc+1)}>ParentContext2 Count - {count}</button>
        <CountContextProvider value={count}>
            {children}
        </CountContextProvider>
    </div>
  )
}
