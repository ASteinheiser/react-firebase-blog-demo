import dynamic from 'next/dynamic'
import { convertToRaw, convertFromRaw } from 'draft-js'
import convertToHtml from 'draftjs-to-html'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

const _Editor = ({ onChange, onChangeRaw, onChangeHTML, initialState }) => {
  if (!initialState) {
    initialState = { blocks: [], entityMap: {} }
  } else {
    initialState = convertToRaw(initialState)
  }

  const handleChange = data => {
    if (onChangeRaw) onChangeRaw(data)
    if (onChange) onChange(convertFromRaw(data))
    if (onChangeHTML) onChangeHTML(convertToHtml(data))
  }

  return (
    <Editor
      initialContentState={initialState}
      onContentStateChange={handleChange}
      wrapperClassName='editor__container'
      toolbarClassName='editor__container--toolbar'
      editorClassName='editor__container--text-field'
    />
  )
}

export default _Editor
