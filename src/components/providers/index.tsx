'use client'

import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/components/ui/sonner'

const Providers = ({ children, ...all}: PropsWithChildren) => {
  return (
    <ThemeProvider {...all}>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

export default Providers