'use client'

import React, { PropsWithChildren } from 'react'
import { Toaster } from '../ui/sonner'
import { ThemeProvider } from './theme-provider'

const Providers = ({ children, ...all}: PropsWithChildren) => {
  return (
    <ThemeProvider {...all}>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

export default Providers