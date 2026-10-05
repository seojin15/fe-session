import { useMemo, useState } from 'react'
import PostList from '../components/PostList'
import usePosts from '../hooks/usePosts'

export default function PostListPage({ onWrite, onSelectPost }) {
  const [searchText, setSearchText] = useState('')
  const { posts, isLoading, error, removePost } = usePosts()

  const filteredPosts = useMemo(() => {
    const keyword = searchText.trim().toLowerCase()
    if (!keyword) return posts
    return posts.filter((post) => post.title.toLowerCase().includes(keyword))
  }, [posts, searchText])

  return (
    <section>
      <header className="page-header">
        <h1>게시글 목록</h1>
        <button type="button" onClick={onWrite}>글쓰기</button>
      </header>
      <input className="search-input" type="search" placeholder="제목 검색" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
      {isLoading && <p>불러오는 중...</p>}
      {error && <p className="error-message">{error}</p>}
      {!isLoading && !error && <PostList posts={filteredPosts} onSelectPost={onSelectPost} onDeletePost={removePost} />}
    </section>
  )
}
