'use client'

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const Sidebar = ({lessons}: { lessons: any[]}) => {
  const pathname = usePathname()
  return (
    <nav className="w-[320px] md:px-8 hidden md:flex bg-background z-10 fixed overflow-hidden">
      <div className="flex flex-col gap-y-3 left-0 p-4 py-6 overflow-y-auto h-[calc(100vh-110px)] custom-scrollbar">
        <h2 className="text-xl font-bold hidden">LawHub</h2>

        <div className="flex flex-col gap-y-5">
          {
            lessons.map((lesson, pindex) => (
              <div key={lesson.title} className="flex flex-col gap-y-1">
                <h3 className={cn("text-lg font-normal", pathname === lesson?.slug && 'text-blue-500')}>{lesson.title}</h3>
                {/* <ul className="flex flex-col gap-y-1">
                  {
                    lesson.lessons.map((lesson, index) => (
                      <li key={lesson.title}>
                        <a href={lesson.url} className={cn("text-base", pindex === 3 && index==1&&'font-semibold')}>{lesson.title}</a>
                      </li>
                    ))
                  }
                </ul> */}
              </div>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Sidebar