import Editor from '../components/Editor'

const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        React WYSIWYG Editor
      </h1>

      <div style={{ width: 800, height: 600, margin: 'auto' }}>
        <Editor />
      </div>
    </>
  )
}

export default Home
