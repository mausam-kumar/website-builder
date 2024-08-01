"use-client"
import { useEditorStateContext } from "@/context/EditorStateProvider"
import DynamicImage from "./elements/Image"
import Button from "./elements/Button"
import { FC } from "react"

type PreviewProps = {
    templateId: string
}

const Preview: FC<PreviewProps> = ({ templateId }) => {
    const { editorState } = useEditorStateContext()

    const element = editorState.find((_) => _.id === templateId)
    const { left, top, type, content = {} } = element || {}
    const renderAction = () => {
        switch (type) {
            case "image":
                return <DynamicImage imageURL={content.imageURL} height={Number(content.height || 250)} width={Number(content.width || 500)} />
            case "button":
                return <Button type="button" text={content.text || "Default Text"} height={Number(content.height || 40)} width={Number(content.width || 200)} />
            case "text":
                <div>{content.text}</div>
            default:
                break;
        }
        return
    };

    return <div className="flex-1 relative bg-gray-100">
        <div
            className="absolute"
            style={{
                left,
                top,
            }}
        >
            {
                renderAction()
            }
        </div>
    </div>

}

export default Preview