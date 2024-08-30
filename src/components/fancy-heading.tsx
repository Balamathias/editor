import React, { ReactNode } from 'react'

const FancyHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className='font-semibold py-2 text-3xl bg-gradient-to-l from-blue-600 via-pink-600 to-violet-500 bg-clip-text text-transparent'>{children}</h2>
  )
}

export default FancyHeading