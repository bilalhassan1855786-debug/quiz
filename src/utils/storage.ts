import { Quiz } from '@/types/quiz'
import { defaultQuizzes } from '@/data/defaultQuizzes'

export const getQuizzes = (): Quiz[] => {
  if (typeof window === 'undefined') return []

  const data = localStorage.getItem('quizzes')
  if (data) return JSON.parse(data)

  localStorage.setItem('quizzes', JSON.stringify(defaultQuizzes))
  return defaultQuizzes
}

export const saveQuizzes = (quizzes: Quiz[]) => {
  localStorage.setItem('quizzes', JSON.stringify(quizzes))
}