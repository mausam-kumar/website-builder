"use-client"
import { useEditorStateContext } from "@/context/EditorStateProvider"
import Button from "./elements/Button"
import DynamicImage from "./elements/Image"
import { defaultImageURL } from "@/utils/constant"

const Editor = () => {
    const { editorState, setEditorState } = useEditorStateContext()

    const removeElementFromEditor = (elementId: number) => {
        const updatedState = editorState.filter(function ({ id }) {
            return elementId !== id;
        })

        setEditorState(updatedState)
    }

    return <div className='flex-1 border shadow-lg p-4 flex flex-col space-y-16 overflow-y-scroll'>
        {editorState.map(({ type, id, props }) => {
            const { imageURL, height, width, text, alt } = props
            switch (type) {
                case "image":
                    return <DynamicImage key={id} alt={String(alt)} height={Number(height || 300)} width={Number(width || 500)} imageURL={String(imageURL || defaultImageURL)} handleRemove={() => removeElementFromEditor(id)} />
                case "button":
                    return <Button height={Number(height)} width={Number(width)} text={String(text || "Default Text")} showCloseBtn handleRemove={() => removeElementFromEditor(id)} />
                default:
                    return null
            }
        })}
    </div>
}

export default Editor