import { NextRequest, NextResponse } from "next/server";

const details = {
  "type": "doc",
  "content": [
      {
          "type": "heading",
          "attrs": {
              "level": 2
          },
          "content": [
              {
                  "type": "text",
                  "text": "Welcome to my Custom Rich text editor"
              }
          ]
      },
      {
          "type": "paragraph",
          "content": [
              {
                  "type": "text",
                  "text": "Man, You just landed on my Premium Editor configuration. Flex the times as you explore the inherent features. AI is coming very soon, By the way, let me include other plugins like undo and redo."
              }
          ]
      },
      {
          "type": "paragraph"
      },
      {
          "type": "paragraph",
          "content": [
              {
                  "type": "text",
                  "text": "Man, you just landed on my "
              },
              {
                  "type": "text",
                  "marks": [
                      {
                          "type": "bold"
                      }
                  ],
                  "text": "Premium Editor configuration"
              },
              {
                  "type": "text",
                  "text": ". Flex the times as you explore the inherent features. AI is coming very soon, By the way, let me include other plugins like undo and redo."
              }
          ]
      },
      {
          "type": "paragraph"
      },
      {
          "type": "paragraph",
          "content": [
              {
                  "type": "text",
                  "text": "Man, you just landed on my Premium Editor configuration."
              },
              {
                  "type": "text",
                  "marks": [
                      {
                          "type": "italic"
                      }
                  ],
                  "text": " Flex the times as you explore the inherent features. AI is coming very soon"
              },
              {
                  "type": "text",
                  "text": ", By the way, let me include other plugins like undo and redo."
              }
          ]
      },
      {
          "type": "paragraph",
          "content": [
              {
                  "type": "text",
                  "text": "Man, you just landed on my Premium Editor configuration. Flex the times as you explore the inherent features. AI is coming very soon, "
              },
              {
                  "type": "text",
                  "marks": [
                      {
                          "type": "code"
                      }
                  ],
                  "text": "By the way"
              },
              {
                  "type": "text",
                  "text": ", let me include other plugins like undo and redo."
              }
          ]
      },
      {
          "type": "paragraph"
      },
      {
          "type": "heading",
          "attrs": {
              "level": 2
          },
          "content": [
              {
                  "type": "text",
                  "text": "Welcome to my Custom Rich text editor"
              }
          ]
      },
      {
          "type": "paragraph",
          "content": [
              {
                  "type": "text",
                  "text": "Man, you just landed on my Premium Editor configuration. Flex the times as you explore the inherent features. AI is coming very soon, By the way, let me include other plugins like undo and redo."
              }
          ]
      },
      {
          "type": "paragraph"
      },
      {
          "type": "blockquote",
          "content": [
              {
                  "type": "paragraph",
                  "content": [
                      {
                          "type": "text",
                          "marks": [
                              {
                                  "type": "bold"
                              }
                          ],
                          "text": "Really?"
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "content": [
                      {
                          "type": "text",
                          "text": "Man, you just landed on my Premium Editor configuration. Flex the times as you explore the inherent features. AI is coming very soon, By the way, let me include other plugins like undo and redo."
                      }
                  ]
              }
          ]
      },
      {
          "type": "paragraph"
      },
      {
          "type": "codeBlock",
          "attrs": {
              "language": null
          },
          "content": [
              {
                  "type": "text",
                  "text": "def function() -> int:\n    return \"Python is cool\""
              }
          ]
      },
      {
          "type": "image",
          "attrs": {
              "src": null,
              "alt": null,
              "title": null,
              "width": null,
              "height": null
          }
      }
  ]
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  const params = req.nextUrl.searchParams
  const slug = params.get('slug')
  const course_slug = params.get('course_slug')

  const lessons = [
    {
      course_slug: 'constitutional-law',
      title: 'Constitutional Interpretation',
      slug: 'constitutional-interpretation',
      id: 1,
      content: {
        details: details,
        flashcards: [
          {
            question: "What is the required number of votes for adjusting the boundaries of Nigeria?",
            answer: "Four fifths majority."
          },
          {
            question: "When is 2/3 majority required?",
            answer: "2/3 majority is required in the amendment of other parts of the constitution."
          },
          {
            question: "What is the Key component of a constitution?",
            answer: "A constitution is key to smoothening the work of government in a country."
          },
          {
            question: "What does a constitution set standards for?",
            answer: "It similarly sets standards for the behaviour of the citizens of a country."
          },
        ],
        video: {
          title: "How the Constitution is interpreted",
          url: 'https://short-video.com/interpretation.mp4',
          description: "bla bla bla"
        },
        quiz: [
          {
            id: 1,
            question: "What is a Constitution?",
            answers: ['Rule maker', 'Rule setter', 'All of them', 'None'],
            correct: 1
          },
          {
            id: 2,
            question: "What is Nigeria's current Constitution?",
            answers: ['1979', '1989', '1999', '2001'],
            correct: 2
          },
          {
            id: 3,
            question: "What is the required number of votes for adjusting the boundaries of Nigeria?",
            answers: ['Four fifths majority', 'Three fifths majority', 'Two thirds majority', 'Three quarters majority'],
            correct: 0
          },
          {
            id: 4,
            question: "When is 2/3 majority required?",
            answers: ['In the amendment of the constitution', 'In the amendment of other parts of the constitution', 'In the amendment of the constitution and other parts of the constitution', 'None'],
            correct: 1
          },
        ]
      }
    },
    {
      course_slug: 'criminal-law',
      title: 'Theft',
      slug: 'theft',
      id: 2,
      content: {
        details: "Theft is the act of taking someone else's property without their permission.",
        flashcards: [
          {
            question: "What is the required number of votes for adjusting the boundaries of Nigeria?",
            answer: "Four fifths majority."
          },
          {
            question: "When is 2/3 majority required?",
            answer: "2/3 majority is required in the amendment of other parts of the constitution."
          },
        ],
        video: {
          title: "How the Constitution is interpreted",
          url: 'https://short-video.com/interpretation.mp4',
          description: "bla bla bla"
        },
        quiz: [
          {
            id: 1,
            question: "What is a Constitution?",
            answers: ['Rule maker', 'Rule setter', 'All of them', 'None'],
            correct: 1
          },
          {
            id: 2,
            question: "What is Nigeria's current Constitution?",
            answers: ['1979', '1989', '1999', '2001'],
            correct: 2
          }
        ]
      }
    },
    {
      course_slug: 'contract-law',
      title: 'Offer and Acceptance',
      slug: 'offer-and-acceptance',
      id: 3,
      content: {
        details: "Offer and acceptance is the first step in the formation of a contract.",
        flashcards: [
          {
            question: "What is the required number of votes for adjusting the boundaries of Nigeria?",
            answer: "Four fifths majority."
          },
          {
            question: "When is 2/3 majority required?",
            answer: "2/3 majority is required in the amendment of other parts of the constitution."
          },
        ],
        video: {
          title: "How the Constitution is interpreted",
          url: 'https://short-video.com/interpretation.mp4',
          description: "bla bla bla"
        },
        quiz: [
          {
            id: 1,
            question: "What is a Constitution?",
            answers: ['Rule maker', 'Rule setter', 'All of them', 'None'],
            correct: 1
          },
          {
            id: 2,
            question: "What is Nigeria's current Constitution?",
            answers: ['1979', '1989', '1999', '2001'],
            correct: 2
          }
        ]
      }
    }
  ]

  if (slug) {
    return NextResponse.json({
      data: lessons.find(lesson => lesson.slug === slug)
    }, {
      status: 200
    })
  }

  if (course_slug) {
    return NextResponse.json({
      data: lessons.filter(lesson => lesson.course_slug === course_slug)
    }, {
      status: 200
    })
  }

  return NextResponse.json({
    data: lessons,
  }, {
    status: 200
  })
}