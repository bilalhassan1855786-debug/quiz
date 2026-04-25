import { Quiz } from '@/types/quiz'

export const defaultQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Computer Basics',
    questions: [
      {
        question: 'What does CPU stand for?',
        options: [
          'Central Process Unit',
          'Central Processing Unit',
          'Computer Personal Unit',
          'Central Processor Utility',
        ],
        answer: 'Central Processing Unit',
      },
      {
        question: 'Which is an input device?',
        options: ['Monitor', 'Keyboard', 'Speaker', 'Printer'],
        answer: 'Keyboard',
      },
    ],
  },
]