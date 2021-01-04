import convertToHtml from 'draftjs-to-html'

const BlogPosts = ({ data, handleEditPost }) => {
  if (!data) return null

  return data.map(blogPost => (
    <div key={blogPost.id} className='blog-posts__container'>
      {blogPost.title}

      <button
        className='blog-post__edit-button'
        onClick={() => handleEditPost(blogPost)}
      >
        EDIT
      </button>

      <br />

      <div
        className='blog-post__preview'
        dangerouslySetInnerHTML={{ __html: convertToHtml(blogPost.data) }}
      />
    </div>
  ))
}

export default BlogPosts
