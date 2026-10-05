import { useState } from 'react'
import { createPost } from '../api/postApi'
import PostForm from '../components/PostForm'

export default function PostWritePage({ onCancel, onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (formData) => {
    setIsSubmitting(true)
    setError('')
    try {
      await createPost({ ...formData, createdAt: new Date().toISOString().slice(0, 10) })
      onSuccess()
    } catch {
      setError('글을 등록하지 못했습니다.')
      setIsSubmitting(false)
    }
  }

  return (
    <section>
      <h1>글쓰기</h1>
      {error && <p className="error-message">{error}</p>}
      <PostForm onSubmit={handleSubmit} onCancel={onCancel} isSubmitting={isSubmitting} />
    </section>
  )
}
