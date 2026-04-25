export interface Question {
  question: string
  options: string[]
  correctIndex: number
}

export interface Quiz {
  id: string
  title: string
  questions: Question[]
}