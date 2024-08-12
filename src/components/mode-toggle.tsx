"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { _themes } from "./providers/theme-provider"
import { cn } from "@/lib/utils"

export default function ModeToggle() {
  const { setTheme, themes, theme: t_ } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="grid gap-2.5 grid-cols-3 md:grid-cols-4">
        {
          _themes.map(theme => (
            <DropdownMenuItem 
              key={theme.value} 
              onClick={() => setTheme(theme.value)}
            >
              <div className={cn("flex p-2 flex-row gap-x-1 items-center", 'rounded-lg w-full', {
                'bg-black/95 dark:text-white !text-white': theme.class === 'dark',
                // 'bg-white !text-primary-foreground': theme.class === 'dark',
              })}>
                <span className={cn("w-5 h-5 rounded-full", theme.bg)} />
                <span className={cn("text-xs md:text-sm", (theme.value === t_) && theme.value.replace('bg', 'text') )}>{theme.label}</span>
              </div>
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
