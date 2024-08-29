import { cn } from "@/lib/utils"

const lessons = [
  {
    title: 'Introduction',
    lessons: [
      {
        title: 'Welcome to LawHub',
        url: '/lessons/welcome-to-lawhub'
      },
      {
        title: 'How to use LawHub',
        url: '/lessons/how-to-use-lawhub'
      }
    ]
  },
  {
    title: 'Getting Started',
    lessons: [
      {
        title: 'What is Law?',
        url: '/lessons/what-is-law'
      },
      {
        title: 'What is the Constitution?',
        url: '/lessons/what-is-the-constitution'
      }
    ]
  },
  {
    title: 'Fundamental Rights',
    lessons: [
      {
        title: 'What are Fundamental Rights?',
        url: '/lessons/what-are-fundamental-rights'
      },
      {
        title: 'Right to Equality',
        url: '/lessons/right-to-equality'
      }
    ]
  },
  {
    title: 'Directive Principles of State Policy',
    lessons: [
      {
        title: 'What are DPSPs?',
        url: '/lessons/what-are-dpsps'
      },
      {
        title: 'Importance of DPSPs',
        url: '/lessons/importance-of-dpsps'
      }
    ]
  },
  {
    title: 'Judiciary',
    lessons: [
      {
        title: 'What is the Judiciary?',
        url: '/lessons/what-is-the-judiciary'
      },
      {
        title: 'Supreme Court of India',
        url: '/lessons/supreme-court-of-india'
      }
    ]
  },
  {
    title: 'Parliament',
    lessons: [
      {
        title: 'What is the Parliament?',
        url: '/lessons/what-is-the-parliament'
      },
      {
        title: 'Lok Sabha',
        url: '/lessons/lok-sabha'
      }
    ]
  },
  {
    title: 'State Legislature',
    lessons: [
      {
        title: 'What is the State Legislature?',
        url: '/lessons/what-is-the-state-legislature'
      },
      {
        title: 'Vidhan Sabha',
        url: '/lessons/vidhan-sabha'
      }
    ]
  },
  {
    title: 'Local Government',
    lessons: [
      {
        title: 'What is Local Government?',
        url: '/lessons/what-is-local-government'
      },
      {
        title: 'Panchayati Raj',
        url: '/lessons/panchayati-raj'
      }
    ]
  },
  {
    title: 'Constitutional Amendments',
    lessons: [
      {
        title: 'What are Constitutional Amendments?',
        url: '/lessons/what-are-constitutional-amendments'
      },
      {
        title: 'Important Amendments',
        url: '/lessons/important-amendments'
      }
    ]
  },
  {
    title: 'Important Articles',
    lessons: [
      {
        title: 'Article 370',
        url: '/lessons/article-370'
      },
      {
        title: 'Article 35A',
        url: '/lessons/article-35a'
      }
    ]
  }
]

const Sidebar = () => {
  return (
    <nav className="w-[320px] md:px-8 hidden md:flex bg-background z-10 fixed overflow-hidden">
      <div className="flex flex-col gap-y-3 left-0 p-4 py-6 overflow-y-auto h-[calc(100vh-110px)] custom-scrollbar">
        <h2 className="text-xl font-bold hidden">LawHub</h2>

        <div className="flex flex-col gap-y-5">
          {
            lessons.map((lesson, pindex) => (
              <div key={lesson.title} className="flex flex-col gap-y-1">
                <h3 className={cn("text-lg font-semibold", pindex === 3 && 'text-blue-500')}>{lesson.title}</h3>
                <ul className="flex flex-col gap-y-1">
                  {
                    lesson.lessons.map((lesson, index) => (
                      <li key={lesson.title}>
                        <a href={lesson.url} className={cn("text-base", pindex === 3 && index==1&&'font-semibold')}>{lesson.title}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Sidebar