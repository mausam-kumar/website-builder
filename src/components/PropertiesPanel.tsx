import { useSelectedElementStateContext } from "@/context/SelectedElementStateProvider";
import ButtonForm from "./forms/ButtonForm";
import ImageForm from "./forms/ImageForm";
import { useEditorStateContext } from "@/context/EditorStateProvider";
import { Element } from "../../type";
import { defaultImageURL } from "@/utils/constant";

const PropertiesPanel = () => {
    const { editorState } = useEditorStateContext()
    const { selectedElement } = useSelectedElementStateContext()
    const { type } = selectedElement || {}

    const renderAction = () => {
        const element = editorState.find((_) => _.id === selectedElement?.id)
        const { height, width, text, imageURL, alt } = element?.content || {}
        console.log(element, "selectedElement")
        switch (type) {
            case "button":
                return <ButtonForm height={height || "40" } width={width || "200"} text={text || "Default Text"} />
            case "image":
                return <ImageForm imageURL={imageURL || defaultImageURL} alt={alt || "This is default Alt"} height={height || "250"} width={width || "500"} />
            default:
                return null;
        }
    }

    return <div className="min-w-72 space-y-10">
        {renderAction()}
    </div>
};

export default PropertiesPanel