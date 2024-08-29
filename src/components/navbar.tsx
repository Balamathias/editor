'use client'

import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { LucideActivitySquare, LucideAlignCenter } from 'lucide-react'
import { Button } from './ui/button'

const Navbar = ({}) => {

  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    const prevValue = scrollY.getPrevious()

    if (latest > prevValue! && latest > 150) {
        setHidden(true)
    } else {
        setHidden(false)
    }
  })

  return (
    <motion.nav
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        animate={hidden ? "hidden" : "visible"}
        variants={{
            visible: { y: 0 },
            hidden: { y: '-100%' }
        }}
        className="flex flex-row p-2.5 md:p-4 h-20 w-full sticky top-0 z-20 border-b bg-background"
    >
        <div className="flex flex-row justify-between items-center w-full mx-auto py-2 gap-4">
            <h2 className='text-xl font-bold text-primary'>LawHub</h2>
            
            
            <div className='flex-row gap-2 hidden dark:text-green-500'>
                <a>About</a>
                <a>Learn</a>
            </div>

            <div className='flex flex-row items-center gap-2'>
                <Button className='' variant={'secondary'}>Learn</Button>
            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar