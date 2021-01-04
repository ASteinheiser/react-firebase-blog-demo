import { useState, useEffect } from 'react'

import Editor from './Editor'

const BlogPostEditor = ({ visible, onClose, onComplete, editPostData }) => {
  const [postName, setPostName] = useState('')
  const [editorData, setEditorData] = useState(null)

  useEffect(() => {
    if (editPostData && postName !== editPostData.title) {
      setPostName(editPostData.title)
    }
  }, [editPostData])

  if (!visible) return null

  const handleSubmit = () => {
    if (editPostData) {
      onComplete({ id: editPostData.id, title: postName, data: editorData })
    }
    else if (postName && editorData) {
      onComplete({ title: postName, data: editorData })
    }
  }

  const handleClose = () => {
    setPostName('')
    onClose()
  }

  return (
    <div className='blog-post-editor__wrap'>
      <div className='blog-post-editor__container'>
        <h1 className='text-center'>
          {`${editPostData ? 'Update' : 'Create'} Blog Post`}
        </h1>

        <h1 className='blog-post-editor__close-button' onClick={handleClose}>
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

        <div className='text-center'>
          <button className='blog-post-editor__button' onClick={handleSubmit}>
            {`${editPostData ? 'Update' : 'Create'} Post`}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogPostEditor
