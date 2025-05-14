import React from 'react';

interface iContainerProps{
  children: React.ReactNode
}

function Container({children}: iContainerProps) {
  return (
    <div className='container mx-auto'>{children}</div>
  )
}

export default Container