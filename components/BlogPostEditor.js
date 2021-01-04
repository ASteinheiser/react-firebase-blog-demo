import Editor from './Editor'

const BlogPostEditor = ({ visible, onClose, postName = '', setEditorData, editPostData }) => {
  if (!visible) return null

  return (
    <div className='blog-post-editor__wrap'>
      <div className='blog-post-editor__container'>
        <h1 className='text-center'>Create New Blog Post</h1>

        <h1 className='blog-post-editor__close-button' onClick={onClose}>
          X
        </h1>

        <div className='blog-post-editor__title-container'>
          <div className='blog-post-editor__title-text'>
            Post Title:
          </div>

          <input
            className='blog-post-editor__title-input'
            value={postName}
            onChange={({ target }) => setPostName(target.value)}
          />
        </div>

        <div className='blog-post-editor__editor-container'>
          <Editor
            onChange={setEditorData}
            initialState={editPostData && editPostData.data}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogPostEditor
