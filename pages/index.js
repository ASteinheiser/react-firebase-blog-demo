import { useState, useEffect } from 'react'

import db from '../firebase'
import { BlogPosts, BlogPostEditor } from '../components'

const Home = () => {
  const [postEditorVisible, setPostEditorVisible] = useState(false)
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

  const handleUpsertPost = blogPost => {
    if (blogPost.id) {
      // handle updating a post here...
      console.log(blogPost.id)
      handleCloseEditor()
    } else {
      const data = { title: blogPost.title, data: blogPost.data }

      db.collection('posts').add(data)
        .then(() => {
          getPosts()
          handleCloseEditor()
        })
        .catch(error => console.error('Error adding post: ', error))
    }
  }

  const handleDeletePost = data => {}

  const handleEditPost = data => {
    setEditPostData(data)
    setPostEditorVisible(true)
  }

  const handleCloseEditor = () => {
    setEditPostData(null)
    setPostEditorVisible(false)
  }

  return (
    <>
      <BlogPostEditor
        visible={postEditorVisible}
        editPostData={editPostData}
        onComplete={handleUpsertPost}
        onClose={handleCloseEditor}
      />

      <h1 className='text-center'>(React + Firebase) Blog Demo</h1>

      <div className='new-post-button__container'>
        <button
          className='new-post-button'
          onClick={() => setPostEditorVisible(true)}
        >
          Create New Post
        </button>
      </div>

      <h1 className='text-center'>Blog Posts</h1>

      <BlogPosts
        data={posts}
        handleEditPost={handleEditPost}
        handleDeletePost={handleDeletePost}
      />

      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Home
