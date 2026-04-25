'use client'

import { useEffect, useState } from 'react'
import { Quiz } from '@/types/quiz'

export default function QuizPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [selected, setSelected] = useState<Quiz | null>(null)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const data = localStorage.getItem('quizzes')
    if (data) {
      setQuizzes(JSON.parse(data))
    }
  }, [])

  const answer = (opt: string) => {
    if (!selected) return

    if (opt === selected.questions[index].answer) {
      setScore(score + 1)
    }

    if (index + 1 < selected.questions.length) {
      setIndex(index + 1)
    } else {
      alert(`Quiz Finished! Score: ${score + 1}/${selected.questions.length}`)
      setSelected(null)
      setIndex(0)
      setScore(0)
    }
  }

  if (!selected) {
    return (
      <div className="p-10">
        <h1 className="text-3xl mb-6">Available Quizzes</h1>

        {quizzes.length === 0 && <p>No quizzes found. Create from Admin.</p>}

        {quizzes.map((q) => (
          <button
            key={q.id}
            onClick={() => setSelected(q)}
            className="block border p-4 mb-3 rounded w-full"
          >
            {q.title}
          </button>
        ))}
      </div>
    )
  }

  const q = selected.questions[index]

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">{q.question}</h2>
      {q.options.map((o) => (
        <button
          key={o}
          onClick={() => answer(o)}
          className="block border p-3 mb-3 rounded w-full"
        >
          {o}
        </button>
      ))}
    </div>
  )
}