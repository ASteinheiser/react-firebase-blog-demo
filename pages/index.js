import { useState, useEffect } from 'react'

import db from '../firebase'
import { BlogPosts, Editor } from '../components'

const Home = () => {
  const [postName, setPostName] = useState('')
  const [editorData, setEditorData] = useState(null)
  const [editPostData, setEditPostData] = useState(null)
  const [posts, setPosts] = useState(null)

  useEffect(() => getPosts(), [])

  const getPosts = () => {
    db.collection('posts').get()
      .then(querySnapshot => {
        const postsArray = []
        querySnapshot.forEach(doc => {
          postsArray.push({ id: doc.id, ...doc.data() })
        })

        setPosts(postsArray)
      })
      .catch(error => console.error('Error getting posts: ', error))
  }

  const handleUpsertPost = () => {
    if (editPostData) {
      // handle updating a post here...
      console.log(editPostData.id)
    } else if (postName && editorData) {
      const data = { title: postName, data: { ...editorData } }

      db.collection('posts').add(data)
        .then(({ id }) => {
          getPosts()
          setEditPostData({ id, title: postName, data: editorData })
        })
        .catch(error => console.error('Error adding post: ', error))
    }
  }

  const handleEditPost = data => {
    setPostName(data.title)
    setEditPostData(data)
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        React WYSIWYG Editor
      </h1>

      <div style={{ textAlign: 'center', marginBottom: 16, paddingTop: 16, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 'bold', marginRight: 16 }}>
          Post Title:
        </div>

        <input
          style={{ fontSize: 18 }}
          type='text'
          id='postName'
          name='postName'
          value={postName}
          onChange={({ target }) => setPostName(target.value)}
        />
      </div>

      <div style={{ width: 800, height: 600, margin: 'auto' }}>
        <Editor
          onChange={setEditorData}
          initialState={editPostData && editPostData.data}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: 24, marginBottom: 48 }}>
        <button style={{ cursor: 'pointer' }} onClick={handleUpsertPost}>
          Create/Update Post
        </button>
      </div>

      <h1 style={{ textAlign: 'center' }}>
        Blog Posts
      </h1>

      <BlogPosts
        data={posts}
        handleEditPost={handleEditPost}
      />

      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Home
