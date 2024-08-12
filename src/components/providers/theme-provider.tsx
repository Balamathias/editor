"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export const _themes = [
  {
    class: 'dark',
    value: 'dark',
    label: 'Default',
    bg: 'bg-gray-500'
  },
  {
    class: 'dark',
    value: 'violet-dark',
    label: 'Violet',
    bg: 'bg-violet-500'
  },
  {
    class: 'dark',
    value: 'blue-dark',
    label: 'Blue',
    bg: 'bg-blue-500'
  },
  {
    class: 'dark',
    value: 'red-dark',
    label: 'Red',
    bg: 'bg-red-500'
  },
  {
    class: 'dark',
    value: 'green-dark',
    label: 'Green',
    bg: 'bg-green-500'
  },
  {
    class: 'dark',
    value: 'slate-dark',
    label: 'Slate',
    bg: 'bg-slate-500'
  },

  {
    class: 'light',
    value: 'light',
    label: 'Default',
    bg: 'bg-gray-500'
  },
  {
    class: 'light',
    value: 'violet',
    label: 'Violet',
    bg: 'bg-violet-500'
  },
  {
    class: 'light',
    value: 'blue',
    label: 'Blue',
    bg: 'bg-blue-500'
  },
  {
    class: 'light',
    value: 'red',
    label: 'Red',
    bg: 'bg-red-500'
  },
  {
    class: 'light',
    value: 'green',
    label: 'Green',
    bg: 'bg-green-500'
  },
  {
    class: 'light',
    value: 'slate',
    label: 'Slate',
    bg: 'bg-slate-500'
  },
]

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {

  return <NextThemesProvider attribute="class" enableSystem disableTransitionOnChange defaultTheme="system" themes={_themes.map(theme => theme.value)} {...props}>{children}</NextThemesProvider>
}
