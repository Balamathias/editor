import Sidebar from '@/components/main/learn/sidebar'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'
import React, {  } from 'react'

const Layout = async ({ children, params }: any) => {
  const data = await fetch('http://localhost:3000/api/lessons?course_slug='+ params?.course)
  const lessons = (await data.json()).data as any[]

  return (
    <div className={cn('')}>
        <Navbar />
        <div className="overflow-hidden m-0 p-0">
          <Sidebar lessons={lessons} />
          <div className="md:px-8 py-6 px-2.5 md:ml-[320px]">
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout