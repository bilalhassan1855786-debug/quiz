'use client'

import { useEffect, useState } from 'react'
import { Quiz, QuizQuestion } from '@/types/quiz'

export default function AdminPage() {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState(['', '', '', ''])
  const [answer, setAnswer] = useState('')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [quizzes, setQuizzes] = useState<Quiz[]>([])

  // ✅ Load quizzes once
  useEffect(() => {
    const stored = localStorage.getItem('quizzes')
    if (stored) {
      setQuizzes(JSON.parse(stored))
    }
  }, [])

  // ✅ Save quizzes whenever changed
  useEffect(() => {
    if (quizzes.length >= 0) {
      localStorage.setItem('quizzes', JSON.stringify(quizzes))
    }
  }, [quizzes])

  const addQuestion = () => {
    if (!question || !answer) return alert('Fill question & answer')

    const q: QuizQuestion = { question, options, answer }
    setQuestions([...questions, q])

    setQuestion('')
    setOptions(['', '', '', ''])
    setAnswer('')
  }

  const saveQuiz = () => {
    if (!title) return alert('Enter title')
    if (questions.length === 0) return alert('Add questions')

    const newQuiz: Quiz = {
      id: Date.now().toString(),
      title,
      questions,
    }

    setQuizzes((prev) => [...prev, newQuiz]) // ✅ correct way
    setTitle('')
    setQuestions([])
    alert('Quiz Saved!')
  }

  const deleteQuiz = (id: string) => {
    const updated = quizzes.filter((q) => q.id !== id)
    setQuizzes(updated)
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin - Create Quiz</h1>

      {/* Create Quiz */}
      <div className="border p-6 rounded mb-10">
        <input
          className="border p-2 w-full mb-4"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        {options.map((opt, i) => (
          <input
            key={i}
            className="border p-2 w-full mb-2"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const newOpts = [...options]
              newOpts[i] = e.target.value
              setOptions(newOpts)
            }}
          />
        ))}

        <input
          className="border p-2 w-full mb-2"
          placeholder="Correct Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          onClick={addQuestion}
          className="bg-blue-600 text-white px-4 py-2 rounded mr-3"
        >
          Add Question
        </button>

        <button
          onClick={saveQuiz}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Save Quiz
        </button>

        <p className="mt-3 font-semibold">Questions: {questions.length}</p>
      </div>

      {/* ✅ Show Saved Quizzes with Delete */}
      <h2 className="text-2xl font-bold mb-4">Saved Quizzes</h2>

      {quizzes.length === 0 && <p>No quizzes saved yet.</p>}

      {quizzes.map((q) => (
        <div
          key={q.id}
          className="border p-4 rounded mb-3 flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{q.title}</h3>
            <p>{q.questions.length} Questions</p>
          </div>

          <button
            onClick={() => deleteQuiz(q.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}