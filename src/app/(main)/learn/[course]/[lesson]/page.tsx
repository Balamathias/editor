import FancyHeading from '@/components/fancy-heading'
import FlashcardsGrid from '@/components/main/learn/flash-cards-grid'
import MinQuiz from '@/components/main/learn/mini-quiz'
import Previewer from '@/components/novel/previewer'
import { JSONContent } from 'novel'
import React from 'react'

const Page = async ({ params }: { searchParams: Record<string, any>, params: Record<string, any> }) => {
  const slug = params?.lesson
  const req = await fetch(`http://localhost:3000/api/lessons?slug=${slug}`)
  const lesson = (await req.json()).data as Record<string, any>
  console.log(lesson)
  return (
    <div className='flex flex-col gap-y-4'>
      <FancyHeading>{lesson?.title}</FancyHeading>

      <Previewer initialContent={lesson?.content?.details as JSONContent} />

      {
        lesson?.content?.flashcards?.length && <FlashcardsGrid flashcards={lesson?.content?.flashcards ?? []} />
      }

      { lesson?.content?.quiz?.length && <MinQuiz quizzes={lesson?.content?.quiz ?? []} /> }

    </div>
  )
}

export default Page