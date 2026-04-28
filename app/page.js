'use client'

import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
 const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    setImageUrl(data.message)
    setLoading(false)
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-purple-600">LESS GOO </h1>
      <p className="text-gray-500 mt-4">Type your name below</p>
      <input
        className="border p-2 mt-4 rounded text-black bg-white"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-purple-600 text-white px-6 py-2 rounded ml-4"
        onClick={handleClick}
      >
        {loading ? 'Loading...' : 'Get Joke'}
      </button>
      {imageUrl && <img src={imageUrl} className="mt-6 w-64 rounded-lg" />}
    </div>
  )
}