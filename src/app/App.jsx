import { useState } from 'react'
import PostDetailPage from '../features/post/pages/PostDetailPage'
import PostListPage from '../features/post/pages/PostListPage'
import PostWritePage from '../features/post/pages/PostWritePage'
import './App.css'

function App() {
  const [page, setPage] = useState('list')
  const [selectedPostId, setSelectedPostId] = useState(null)

  const showList = () => {
    setSelectedPostId(null)
    setPage('list')
  }

  const showDetail = (postId) => {
    setSelectedPostId(postId)
    setPage('detail')
  }

  return (
    <main className="page-shell">
      {page === 'list' && (
        <PostListPage
          onWrite={() => setPage('write')}
          onSelectPost={showDetail}
        />
      )}
      {page === 'write' && <PostWritePage onCancel={showList} onSuccess={showList} />}
      {page === 'detail' && (
        <PostDetailPage postId={selectedPostId} onBack={showList} />
      )}
    </main>
  )
}

export default App
