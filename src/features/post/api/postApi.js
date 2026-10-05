const POSTS_URL = 'http://localhost:3000/posts'

async function request(url, options) {
  const response = await fetch(url, options)
  if (!response.ok) throw new Error('요청에 실패했습니다.')
  if (response.status === 204) return null
  return response.json()
}

export const getPosts = () => request(POSTS_URL)
export const getPost = (postId) => request(`${POSTS_URL}/${postId}`)

export const createPost = (post) => request(POSTS_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(post),
})

export const deletePost = (postId) => request(`${POSTS_URL}/${postId}`, {
  method: 'DELETE',
})
