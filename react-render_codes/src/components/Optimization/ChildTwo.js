import React from 'react'

export const ChildTwo = () => {
  console.log('Rendering ChildTwo component...');

  return (
    <div>ChildTwo</div>
  )
}

export const MemoChildTwo = React.memo(ChildTwo);
