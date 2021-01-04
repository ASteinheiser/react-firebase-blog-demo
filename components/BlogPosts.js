import convertToHtml from 'draftjs-to-html'

const BlogPosts = ({ data, handleEditPost }) => {
  if (!data) return null

  return data.map(blogPost => (
    <div
      key={blogPost.id}
      style={{ width: 600, margin: '8px auto', textAlign: 'center', fontSize: 20, padding: '16px 0', border: '1px solid grey' }}
    >
      {blogPost.title}

      <button
        style={{ marginLeft: 16, cursor: 'pointer' }}
        onClick={() => handleEditPost(blogPost)}
      >
        EDIT
      </button>

      <br />

      <div style={{ marginTop: 16 }}>
        <div dangerouslySetInnerHTML={{ __html: convertToHtml(blogPost.data) }} />
      </div>
    </div>
  ))
}

export default BlogPosts
