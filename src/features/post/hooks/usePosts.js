import { useEffect, useState } from 'react'
import { deletePost, getPosts } from '../api/postApi'

export default function usePosts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setError('글 목록을 불러오지 못했습니다. json-server를 확인해 주세요.'))
      .finally(() => setIsLoading(false))
  }, [])

  const removePost = async (postId) => {
    try {
      await deletePost(postId)
      setPosts((currentPosts) => currentPosts.filter((post) => post.id !== postId))
    } catch {
      setError('글을 삭제하지 못했습니다.')
    }
  }

  return { posts, isLoading, error, removePost }
}
