import { useDrag, useDrop, DragSourceMonitor } from "react-dnd";
import React, { useRef } from "react";
import Button from "./elements/Button";
import { Element, ElementType } from "../../type";
import DynamicImage from "./elements/Image";
import { useEditorStateContext } from "@/context/EditorStateProvider";
import { defaultButton, defaultImage, defaultTextArea } from "@/utils/constant";
import TextArea from "./elements/TextArea";

type DraggableElementProps = {
  element: Element;
  onSelect: (id: string) => void;
}

const DraggableElement: React.FC<DraggableElementProps> = ({ element, onSelect }) => {
  const { editorState, setEditorState } = useEditorStateContext()
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: element.type,
    item: { id: element.id },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: [ElementType.TEXT, ElementType.IMAGE, ElementType.BUTTON],
    hover: () => onSelect(element.id),
  });

  drag(drop(ref));

  const removeElementFromEditor = (elementId: string) => {
    const updatedState = editorState.filter(function ({ id }) {
        return elementId !== id;
    })

    setEditorState(updatedState)
}
  const { imageURL, height, width, alt, text, backgroundColor, textColor } = element?.content || {}
  return (
    <div
      ref={ref}
      className="absolute cursor-move"
      style={{
        left: element.left,
        top: element.top,
        opacity: isDragging ? 0.5 : 1,
      }}
      onClick={() => onSelect(element.id)}
    >
      {element.type === ElementType.TEXT && <TextArea text={text || defaultTextArea.text} height={Number(height || defaultButton.height)} width={Number(width || defaultButton.width)} backgroundColor={backgroundColor || defaultButton.backgroundColor} textColor={textColor || defaultButton.textColor} />}
      {element.type === ElementType.IMAGE && <DynamicImage imageURL={imageURL} height={Number(height || defaultImage.height)} width={Number(width || defaultImage.width)} showRemoveBtn handleRemove={() => removeElementFromEditor(element.id)} alt={alt} />}
      {element.type === ElementType.BUTTON && <Button type="button" text={text || "Default Text"} height={Number(height || defaultButton.height)} width={Number(width || defaultButton.width)} showCloseBtn handleRemove={() => removeElementFromEditor(element.id)} backgroundColor={backgroundColor || defaultButton.backgroundColor} textColor={textColor || defaultButton.textColor} />}
    </div>
  );
};

export default DraggableElement;