import { useState } from 'react'

export default function PostForm({ onSubmit, onCancel, isSubmitting }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ title, content, author })
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <label>제목<input value={title} onChange={(event) => setTitle(event.target.value)} required /></label>
      <label>작성자<input value={author} onChange={(event) => setAuthor(event.target.value)} required /></label>
      <label>내용<textarea value={content} onChange={(event) => setContent(event.target.value)} required /></label>
      <div className="button-group">
        <button type="button" onClick={onCancel}>취소</button>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? '등록 중...' : '등록'}</button>
      </div>
    </form>
  )
}
