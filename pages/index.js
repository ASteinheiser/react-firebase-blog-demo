import { useState } from 'react'

import Editor from '../components/Editor'

const Home = () => {
  const [editorHTML, setEditorHTML] = useState(null)

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        React WYSIWYG Editor
      </h1>

      <div style={{ width: 800, height: 600, margin: 'auto' }}>
        <Editor onChangeHTML={setEditorHTML} onChange={console.log} />
      </div>

      <div
        style={{ width: 800, margin: 'auto', marginTop: 24, border: '1px solid grey' }}
        dangerouslySetInnerHTML={{ __html: editorHTML }}
      />
    </>
  )
}

export default Home
