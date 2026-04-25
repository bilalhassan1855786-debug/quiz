export type QuizQuestion = {
  question: string
  options: string[]
  answer: string
}

export type Quiz = {
  id: string
  title: string
  questions: QuizQuestion[]
}