import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest, res: NextResponse) => {
  const slug = req.nextUrl.searchParams.get('slug')
  const courses = [
    {
      title: 'Constitutional Law',
      slug: 'constitutional-law',
      description: 'Learn the basics of constitutional law.',
      id: 1,
    },
    {
      title: 'Criminal Law',
      slug: 'criminal-law',
      description: 'Learn the basics of criminal law.',
      id: 2,
    },
    {
      title: 'Contract Law',
      slug: 'contract-law',
      description: 'Learn the basics of contract law.',
      id: 3,
    },
  ]

  if (slug) {
    const course = courses.find(course => course.slug === slug)
    if (!course) {
      return NextResponse.json({error: 'Course not found'}, {status: 404})
    }
    return NextResponse.json({data: course}, {status: 200})
  }

  return NextResponse.json({data: courses}, {status: 200})
}
