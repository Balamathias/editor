'use client'

import React, { ComponentProps } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface QuizButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode,
  correct?: boolean
}

const QuizButton = ({ children, correct, className, ...props }: QuizButtonProps) => {
  return (
    <motion.button
      {...props as any}
      whileHover={{ scale: 1.03, opacity: 0.9 }}
      whileTap={{ scale: 0.9, rotate: '2deg' }}
      initial={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'bg-primary/15 text-primary-600 px-4 py-2.5 rounded-lg shadown-sm w-full border dark:none',
        className
      )}
      animate={{ className: cn(correct && 'bg-green-500/20 text-green-500') }}
    >
      {children}
    </motion.button>
  )
}

export default QuizButton