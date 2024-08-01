import { useDrag, useDrop, DragSourceMonitor } from "react-dnd";
import React, { useRef } from "react";
import Button from "./elements/Button";
import { Element, ElementType } from "../../type";
import DynamicImage from "./elements/Image";

interface DraggableElementProps {
  element: Element;
  onSelect: (id: string) => void;
}

const DraggableElement: React.FC<DraggableElementProps> = ({ element, onSelect }) => {
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
      {element.type === ElementType.IMAGE && <DynamicImage imageURL={element.content.imageURL} />}
      {element.type === ElementType.BUTTON && <Button type="button" text={element.content.text || "Default Text"} height={Number(element.content.height || 40)} width={Number(element.content.width || 200)} showCloseBtn />}
    </div>
  );
};

export default DraggableElement;