import React from 'react'

export const ChildSix = ({name, person, clickHandler}) => {
  console.log('Rendering childFive...');
  clickHandler();
  return (
    <div>
        <div>Hello {name}</div>
        <h3>{person.fName} {person.lName}</h3>
    </div>
  )
}

export const MemoChildSix = React.memo(ChildSix);
