import React from 'react'

export const ChildFive = ({name}) => {
  console.log('Rendering childFive...');

  return (
    <div>
        <div>Hello {name}</div>
        {/* <h3>{person.fName} {person.lName}</h3> */}
    </div>
  )
}

export const MemoChildFive = React.memo(ChildFive);
