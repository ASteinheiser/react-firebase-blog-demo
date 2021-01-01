import { useState } from 'react'
import convertToHtml from 'draftjs-to-html'

import Editor from '../components/Editor'

const Home = () => {
  const [editorHTML, setEditorHTML] = useState(null)

  const onEditorChange = data => {
    setEditorHTML(convertToHtml(data))
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        React WYSIWYG Editor
      </h1>

      <div style={{ width: 800, height: 600, margin: 'auto' }}>
        <Editor onChange={onEditorChange} />
      </div>

      <div
        style={{ width: 800, margin: 'auto', marginTop: 24 }}
        dangerouslySetInnerHTML={{ __html: editorHTML }}
      />
    </>
  )
}

export default Home
