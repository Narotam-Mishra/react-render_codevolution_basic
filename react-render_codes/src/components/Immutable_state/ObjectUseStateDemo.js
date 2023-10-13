import React, { useState } from 'react'

const iState = {
    fName : 'Peter',
    lName : 'Siddle'
}

export const ObjectUseStateDemo = () => {
  const[pName, setPname] = useState(iState);

  const changeName = () => {
    // pName.fName = 'David'
    // pName.lName = 'Brown'
    // setPname(pName);

    const newPName = {...iState};
    newPName.fName = 'John'
    newPName.lName = 'Grey'
    setPname(newPName);
  }

  console.log('Object UseState render');
  
  return (
    <div>
        <button onClick={changeName}>{pName.fName} {pName.lName}</button>
    </div>
  )
}
