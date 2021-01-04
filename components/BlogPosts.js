import convertToHtml from 'draftjs-to-html'

const BlogPosts = ({ data, handleEditPost }) => {
  if (!data) return null

  return data.map(blogPost => (
    <div key={blogPost.id} className='blog-posts__container'>
      <div className='blog-posts__title'>
        {blogPost.title}

        <button
          className='blog-post__button'
          onClick={() => handleEditPost(blogPost)}
        >
          EDIT
        </button>

        <button
          className='blog-post__button'
          onClick={() => handleEditPost(blogPost)}
        >
          DELETE
        </button>
      </div>

      <div
        className='blog-post__preview'
        dangerouslySetInnerHTML={{ __html: convertToHtml(blogPost.data) }}
      />
    </div>
  ))
}

export default BlogPosts
