import dynamic from 'next/dynamic'
import convertToHtml from 'draftjs-to-html'

const DraftEditor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

const Editor = ({ onChange, onChangeHTML, initialState }) => {
  if (!initialState) {
    initialState = { blocks: [], entityMap: {} }
  }

  const handleChange = data => {
    if (onChange) onChange(data)
    if (onChangeHTML) onChangeHTML(convertToHtml(data))
  }

  return (
    <DraftEditor
      initialContentState={initialState}
      onContentStateChange={handleChange}
      wrapperClassName='editor__container'
      toolbarClassName='editor__container--toolbar'
      editorClassName='editor__container--text-field'
    />
  )
}

export default Editor
