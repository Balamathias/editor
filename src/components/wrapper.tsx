import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const Wrapper = ({ children, className }: { children?: ReactNode, className?: string}) => {
  return (
    <div className={cn('max-w-7xl mx-auto flex items-center', '', '')}>
        {
            children
        }
    </div>
  )
}

export default Wrapper