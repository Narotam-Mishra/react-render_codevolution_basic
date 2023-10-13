import React from 'react'

export const ChildThree = ({children, name}) => {
  console.log('Rendering ChildThree component...');

  return (
    <div>{children} {name}</div>
  )
}

export const MemoChildThree = React.memo(ChildThree);
