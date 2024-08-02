import { useDrag, useDrop, DragSourceMonitor } from "react-dnd";
import React, { useRef } from "react";
import Button from "./elements/Button";
import { Element, ElementType } from "../../type";
import DynamicImage from "./elements/Image";
import { useEditorStateContext } from "@/context/EditorStateProvider";
import { defaultButton, defaultImage } from "@/utils/constant";

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
      {element.type === ElementType.TEXT && <div>{element.content.text}</div>}
      {element.type === ElementType.IMAGE && <DynamicImage imageURL={element.content.imageURL} height={Number(element.content.height || defaultImage.height)} width={Number(element.content.width || defaultImage.width)} showRemoveBtn handleRemove={() => removeElementFromEditor(element.id)} />}
      {element.type === ElementType.BUTTON && <Button type="button" text={element.content.text || "Default Text"} height={Number(element.content.height || defaultButton.height)} width={Number(element.content.width || defaultButton.width)} showCloseBtn handleRemove={() => removeElementFromEditor(element.id)} backgroundColor={element.content?.backgroundColor || defaultButton.backgroundColor} textColor={element.content?.textColor || defaultButton.textColor} />}
    </div>
  );
};

export default DraggableElement;