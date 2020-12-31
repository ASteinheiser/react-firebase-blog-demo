import dynamic from 'next/dynamic'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

const _Editor = () => {
  return (
    <Editor
      wrapperClassName='editor__container'
      toolbarClassName='editor__container--toolbar'
      editorClassName='editor__container--text-field'
      // editorState={editorState}
      // onEditorStateChange={this.onEditorStateChange}
    />
  )
}

export default _Editor
