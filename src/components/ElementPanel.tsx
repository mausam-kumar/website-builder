import { useEditorStateContext } from "@/context/EditorStateProvider";
import Button from "./elements/Button";
import Sidebar from "./Sidebar";

const ElementPanel = () => {
    const { editorState, setEditorState } = useEditorStateContext()
    const availableElement = [{
        name: "image",
        text: "Add Image",
        type: "image"
    }, {
        name: "button",
        text: "Add Button",
        type: "button"
    }]

    const addElementToEditor = ({ type }: { type: string }) => {
        const id = (editorState?.length || 0) + 1
        setEditorState([...editorState, { id, type, props: {}}])
    };

    return <div className='shadow-lg rounded-sm p-4 space-y-6 flex flex-col w-fit'>
      <Sidebar />
        {
            availableElement.map((_) => {
                return <Button key={_.name} text={_.text} variant="Desktop" onClick={() => addElementToEditor({ type: _.type })} />
            })
        }
    </div>
};

export default ElementPanel