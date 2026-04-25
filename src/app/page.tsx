'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow text-center space-y-6">
        <h1 className="text-4xl font-bold">Smart Exam System</h1>

        <div className="space-x-4">
          <Link href="/admin" className="bg-black text-white px-6 py-3 rounded">
            Admin Panel
          </Link>

          <Link href="/result" className="bg-blue-600 text-white px-6 py-3 rounded">
            Results
          </Link>
        </div>
      </div>
    </main>
  )
}