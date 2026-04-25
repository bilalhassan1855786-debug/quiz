import { Quiz } from '@/types/quiz'

export const defaultQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Computer Basics',
    questions: [
      {
        id: '1-1',
        question: 'What does CPU stand for?',
        options: [
          'Central Process Unit',
          'Central Processing Unit',
          'Computer Personal Unit',
          'Central Processor Utility',
        ],
        correctIndex: 1,
      },
      {
        id: '1-2',
        question: 'Which is an input device?',
        options: ['Monitor', 'Keyboard', 'Speaker', 'Printer'],
        correctIndex: 1,
      },
    ],
  },
]
