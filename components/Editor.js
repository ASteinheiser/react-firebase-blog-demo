import dynamic from 'next/dynamic'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

const _Editor = () => {
  return (
    <Editor
      wrapperClassName='editor__container'
      // editorState={editorState}
      // onEditorStateChange={this.onEditorStateChange}
    />
  )
}

export default _Editor
