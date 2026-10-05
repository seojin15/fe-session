export default function PostItem({ post, onSelect, onDelete }) {
  return (
    <li className="post-item">
      <div>
        <button className="post-title-button" type="button" onClick={() => onSelect(post.id)}>
          {post.title}
        </button>
        <p className="post-meta">{post.author} · {post.createdAt}</p>
      </div>
      <button type="button" onClick={() => onDelete(post.id)}>삭제</button>
    </li>
  )
}
