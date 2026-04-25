'use client'

import { useEffect, useState } from 'react'

export default function ResultPage() {
  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    const data = localStorage.getItem('result')
    if (data) setResult(JSON.parse(data))
  }, [])

  if (!result) return <div className="p-10">No Result Found</div>

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Quiz Result</h1>
      <p className="mt-4 text-xl">Quiz: {result.title}</p>
      <p className="text-xl">Score: {result.score} / {result.total}</p>
    </div>
  )
}