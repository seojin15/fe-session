import PostItem from './PostItem'

export default function PostList({ posts, onSelectPost, onDeletePost }) {
  if (posts.length === 0) return <p>표시할 글이 없습니다.</p>

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onSelect={onSelectPost} onDelete={onDeletePost} />
      ))}
    </ul>
  )
}
