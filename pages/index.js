import { useState, useEffect } from 'react'

import db from '../firebase'
import { BlogPosts, BlogPostEditor } from '../components'

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

  const handleCreatePost = () => {}

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
      <BlogPostEditor />

      <h1 className='text-center'>(React + Firebase) Blog Demo</h1>

      <div className='new-post-button__container'>
        <button className='new-post-button' onClick={handleCreatePost}>
          Create New Post
        </button>
      </div>

      <h1 className='text-center'>Blog Posts</h1>

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
