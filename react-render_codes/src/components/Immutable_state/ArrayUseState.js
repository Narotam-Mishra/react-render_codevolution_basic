import React, { useState } from 'react'

const iniState = ['Johnathan', 'Kendy'];

export const ArrayUseState = () => {
  const[names, setNames] = useState(iniState);

  const setData = () => {
    // names.push('Mark');
    // names.push('Tickner');
    // setNames(names);

    const newNames = [...names];
    newNames.push('James');
    newNames.push('Harris');
    setNames(newNames);
  }

  console.log('Array UseState render....');

  return (
    <div>
        <button onClick={setData}>Change Data</button>
        {
            names.map(name => (
                <div key={name}>{name}</div>
            ))
        }
    </div>
  )
}
