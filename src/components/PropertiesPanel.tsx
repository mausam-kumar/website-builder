import { useSelectedElementStateContext } from "@/context/SelectedElementStateProvider";
import ButtonForm from "./forms/ButtonForm";
import ImageForm from "./forms/ImageForm";
import { useEditorStateContext } from "@/context/EditorStateProvider";
import { defaultButton, defaultImage, defaultImageURL } from "@/utils/constant";

const PropertiesPanel = () => {
    const { editorState } = useEditorStateContext()
    const { selectedElement } = useSelectedElementStateContext()
    const { type } = selectedElement || {}

    const renderAction = () => {
        const element = editorState.find((_) => _.id === selectedElement?.id)
        const { height, width, text, imageURL, alt, backgroundColor, textColor } = element?.content || {}
        switch (type) {
            case "button":
                return <ButtonForm height={height || defaultButton.height} width={width || defaultButton.width} text={text || "Default Text"} backgroundColor={backgroundColor || defaultButton.backgroundColor} textColor={textColor || defaultButton.textColor} />
            case "image":
                return <ImageForm imageURL={imageURL || defaultImageURL} alt={alt || "This is default Alt"} height={height || defaultImage.height} width={width || defaultImage.width} />
            default:
                return null;
        }
    }

    return <div className="min-w-72 space-y-10 rounded-md p-4 shadow-md">
        <p className="text-center text-xl font-semibold leading-8 text-black text-opacity-70 sm:text-xl sm:leading-9 my-4">
            Select element to start editing
        </p>
        {renderAction()}
    </div>
};

export default PropertiesPanel