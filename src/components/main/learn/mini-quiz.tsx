'use client'

import React, { useState } from 'react'
import QuizButton from './quiz-button'
import { motion } from 'framer-motion'
import FancyHeading from '@/components/fancy-heading'

const MinQuiz = ({quizzes}: { quizzes: any[] }) => {
  const [quiz, setQuiz] = useState(quizzes?.[0])
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [showScore, setShowScore] = React.useState(false)
  const [score, setScore] = React.useState(0)

  return (
    <div className='flex flex-col w-full gap-y-4 py-3'>
      <FancyHeading>Quiz</FancyHeading>
      
      {showScore ? (
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold text-primary">You scored {score} out of {quizzes.length}</h1>
          <QuizButton className="w-fit" onClick={() => {
            setShowScore(false)
            setCurrentQuestion(0)
            setScore(0)
            setQuiz(quizzes[0])
          }}>Try again</QuizButton>
        </div>
      ) : (
        <div className="flex flex-col gap-y-3">
          <h1 className="text-2xl font-bold text-primary">{quiz.question}</h1>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quiz?.answers?.map((option: any, index: number) => (
              <QuizButton 
                correct={index === quiz.correct}
                key={index} 
                className="p-2 rounded-lg" 
                onClick={() => {
                  if (index === quiz.correct) {
                    setScore(score + 1)
                  }

                  if (currentQuestion + 1 < quizzes.length) {
                    setCurrentQuestion(currentQuestion + 1)
                    setQuiz(quizzes[currentQuestion + 1])
                  } else {
                    setShowScore(true)
                  }
                }}
              >{option}</QuizButton>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default MinQuiz