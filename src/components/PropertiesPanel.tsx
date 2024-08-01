import { useSelectedElementStateContext } from "@/context/SelectedElementStateProvider";
import ButtonForm from "./forms/ButtonForm";
import ImageForm from "./forms/ImageForm";

const PropertiesPanel = () => {
    const { selectedElement } = useSelectedElementStateContext()
    const { type, content } = selectedElement || {}

    const renderAction = () => {
        const { height, width, text, imageURL, alt } = content || {}
        switch (type) {
            case "button":
                return <ButtonForm height={Number(height || 40)} width={Number(width || 200)} text={text} />
            case "image":
                return <ImageForm imageURL={imageURL} alt={alt} height={Number(height || 250)} width={Number(width || 500)} />
            default:
                break;
        }
    }

    return <div className="min-w-72">
        {renderAction()}
    </div>
};

export default PropertiesPanel