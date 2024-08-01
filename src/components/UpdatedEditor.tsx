import React, { useState, useRef } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "./Sidebar";
import DraggableElement from "./DraggableElement";
import { Element, ElementType } from "../../type";
import { useEditorStateContext } from "@/context/EditorStateProvider";

const Editor: React.FC = () => {
    const { editorState, setEditorState } = useEditorStateContext()
    const [selectedElement, setSelectedElement] = useState<Element | null>(null);
    const editorRef = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop({
        accept: [ElementType.TEXT, ElementType.IMAGE, ElementType.BUTTON],
        drop: (item: { type: ElementType, id: string }, monitor: DropTargetMonitor) => {
            const offset = monitor.getClientOffset();
            if (editorRef.current && offset) {
                const editorBounds = editorRef.current.getBoundingClientRect();
                const { x, y } = offset;
                if (item.id) {
                    setEditorState((prev) =>
                        prev.map((_) =>
                            _.id === item.id ? { ..._, left: offset.x - editorBounds.left, top: offset.y - editorBounds.top } : _
                        )
                    );
                }
                else {

                    const newElement: Element = {
                        id: uuidv4(),
                        type: item.type,
                        left: offset.x - editorBounds.left,
                        top: offset.y - editorBounds.top,
                        content: {},
                    };
                    setEditorState((prev) => [...prev, newElement]);
                }
            }
        },
    });

    // Connect the editorRef to the drop target
    drop(editorRef);

    const handleSelectElement = (id: string) => {
        const element = editorState.find((_) => _.id === id);
        setSelectedElement(element || null);
    };

    const handleUpdateElement = (property: keyof Element, value: any) => {
        setEditorState((prev) =>
            prev.map((el) =>
                el.id === selectedElement?.id ? { ...el, [property]: value } : el
            )
        );
    };

    return (
        <>
            <div className="flex h-screen flex-1">
                <Sidebar />
                <div ref={editorRef} className="flex-1 relative bg-gray-100">
                    {editorState.map((_) => (
                        <DraggableElement
                            key={_.id}
                            element={_}
                            onSelect={handleSelectElement}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Editor;