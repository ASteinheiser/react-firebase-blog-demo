import { useState, useEffect } from 'react'

import db from '../firebase'
import { BlogPosts, Editor } from '../components'

const Home = () => {
  const [editorData, setEditorData] = useState(null)
  const [initialEditorData, setInitialEditorData] = useState(null)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    db.collection('posts').get()
      .then(querySnapshot => {
        const postsArray = []
        querySnapshot.forEach(doc => postsArray.push(doc))

        setPosts(postsArray)
      })
      .catch(error => console.error('Error getting posts: ', error))
  }, [])

  const handleCreatePost = () => {
    if (editorData) {
      db.collection('posts').add(editorData)
        .then(docRef => console.log('Post created with ID: ', docRef.id))
        .catch(error => console.error('Error adding post: ', error))
    }
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        React WYSIWYG Editor
      </h1>

      <div style={{ width: 800, height: 600, margin: 'auto' }}>
        <Editor
          onChangeRaw={setEditorData}
          initialState={initialEditorData}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <button type='button' onClick={handleCreatePost}>
          Create Post
        </button>
      </div>

      <BlogPosts data={posts} />
    </>
  )
}

export default Home
