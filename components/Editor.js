import dynamic from 'next/dynamic'
import { convertToRaw } from 'draft-js'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

const _Editor = ({ onChange, initialState }) => {
  if (!initialState) {
    initialState = { blocks: [], entityMap: {} }
  } else {
    initialState = convertToRaw(initialState)
  }

  return (
    <Editor
      initialContentState={initialState}
      onContentStateChange={onChange}
      wrapperClassName='editor__container'
      toolbarClassName='editor__container--toolbar'
      editorClassName='editor__container--text-field'
    />
  )
}

export default _Editor
