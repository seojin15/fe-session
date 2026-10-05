import { useEffect, useState } from 'react'
import { getPost } from '../api/postApi'

export default function PostDetailPage({ postId, onBack }) {
  const [post, setPost] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    getPost(postId)
      .then(setPost)
      .catch(() => setError('글을 불러오지 못했습니다.'))
  }, [postId])

  if (error) return <p className="error-message">{error}</p>
  if (!post) return <p>불러오는 중...</p>

  return (
    <section>
      <header className="page-header">
        <h1>글 상세</h1>
        <button type="button" onClick={onBack}>목록으로</button>
      </header>
      <article className="post-detail">
        <h2>{post.title}</h2>
        <p className="post-meta">{post.author} · {post.createdAt}</p>
        <hr />
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}
