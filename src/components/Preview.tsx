"use-client"
import { useEditorStateContext } from "@/context/EditorStateProvider"
import DynamicImage from "./elements/Image"
import Button from "./elements/Button"
import { Element } from "../../type"
import EmptyState from "./EmptyState"

const Preview = () => {
    const { editorState } = useEditorStateContext()

    const renderAction = ({ type, content }: Element) => {
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
    };

    return <div className="flex-1 relative bg-gray-100 min-h-screen min-w-screen">
        {!editorState.length && <div className="pt-20"><EmptyState /></div>}
        {
            editorState.map((_) => {
                const { left, top } = _ || {}
                return <div
                    key={_.id}
                    className="absolute"
                    style={{
                        left,
                        top,
                    }}
                >
                    {
                        renderAction(_)
                    }
                </div>
            })
        }

    </div>

}

export default Preview