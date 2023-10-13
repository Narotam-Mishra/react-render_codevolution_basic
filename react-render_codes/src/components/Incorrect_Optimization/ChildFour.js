import React from 'react'

const ChildFour = ({name}) => {
  const date = new Date();
  console.log('Rendering ChildFour component...');

  return (
    <div>Hello {name}. Time is currently {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
  )
}

export const MemoChildFour = React.memo(ChildFour);