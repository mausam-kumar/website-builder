"use-client"
import { useEditorStateContext } from "@/context/EditorStateProvider"
import Button from "./elements/Button"
import DynamicImage from "./elements/Image"

const Editor = () => {
    const { editorState } = useEditorStateContext()
    return <div className='flex-1 border shadow-lg p-4'>
    {editorState.map(({ type, id }) => {
      switch (type) {
        case "image":
          return <DynamicImage key={id} />
        case "button":
          return <Button />
        default:
          return null
      }
    })}
  </div>
}

export default Editor