import React, { ReactNode } from 'react'

const FancyText = ({ children }: { children: ReactNode }) => {
  return (
    <p className='leading-relaxed text-base bg-gradient-to-l from-blue-600 via-pink-600 to-violet-500 bg-clip-text text-transparent'>{children}</p>
  )
}

export default FancyText