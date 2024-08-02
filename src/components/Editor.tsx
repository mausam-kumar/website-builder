import { useRef } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "./Sidebar";
import { getCookie, setCookie } from "cookies-next";
import DraggableElement from "./DraggableElement";
import { Element, ElementType } from "../../type";
import { useEditorStateContext } from "@/context/EditorStateProvider";
import { useSelectedElementStateContext } from "@/context/SelectedElementStateProvider";
import { useRouter, useSearchParams } from "next/navigation";

const Editor = () => {
    const { editorState, setEditorState } = useEditorStateContext()
    const { push } = useRouter()
    const searchParams = useSearchParams()
    const { setSelectedElement } = useSelectedElementStateContext()
    const editorRef = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
        accept: [ElementType.TEXT, ElementType.IMAGE, ElementType.BUTTON],
        drop: (item: { type: ElementType, id: string }, monitor: DropTargetMonitor) => {
            const offset = monitor.getClientOffset();
            if (editorRef.current && offset) {
                const editorBounds = editorRef.current.getBoundingClientRect();
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

    drop(editorRef);

    const handleSelectElement = (id: string) => {
        const element = editorState.find((_) => _.id === id);
        if (typeof element !== "undefined") {
            setSelectedElement(element);
        }
    };

    const handleSaveTemplate = () => {
        const res = getCookie("templates") || "[]"
        const savedTemplates = JSON.parse(res)
        const idInURL = searchParams.get("templateId")
        const maxAge = 7 * 24 * 60 * 60 * 1000;
        console.log(savedTemplates, idInURL)
        if (idInURL) {
            const updatedTemplateList = savedTemplates.map((_: { id: string, editorState: Element[]}) => {
                if (_.id === idInURL) {
                    return { ..._, editorState }
                }else {
                    return _
                }
            })
            setCookie("templates", updatedTemplateList, { maxAge })
        }else{
            const id = uuidv4()
            push(`/?templateId=${id}`)
            setCookie("templates", [...savedTemplates, { id, editorState }], { maxAge })
        }
    }

    return (
        <>
            <div className="flex min-h-screen flex-1 gap-x-6">
                <Sidebar />
                <div ref={editorRef} className="flex-1 relative bg-gray-100">
                    <div className="flex justify-between px-10">
                        <p className="text-center text-xl font-semibold leading-8 text-black text-opacity-70 sm:text-2xl sm:leading-9 mt-4">
                            Drag element here to start
                        </p>
                        {!!editorState.length && <button onClick={handleSaveTemplate} type="button" className="rounded border-2 border-green-900 p-2 w-fit mt-4 text-center text-black text-opacity-70">Save</button>}
                    </div>
                    <div >

                        {editorState.map((_) => (
                            <DraggableElement
                                key={_.id}
                                element={_}
                                onSelect={handleSelectElement}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Editor;