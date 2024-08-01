"use-client"
import {
    createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from "react";
import { Element } from "../../type";

type EditorState = {
    editorState: Element[];
    setEditorState: Dispatch<SetStateAction<Element[]>>;
}

const EditorStateContext = createContext<EditorState>(null!);

export const EditorStateProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [editorState, setEditorState] = useState<Element[]>([]);
    return (
        <EditorStateContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                editorState,
                setEditorState,
            }}
        >
            {children}
        </EditorStateContext.Provider>
    );
};

export const useEditorStateContext = () => {
    const context = useContext(EditorStateContext);
    if (!context) {
        throw new Error(
            "useEditorStateContext must be used within a EditorStateContext",
        );
    }
    return context;
};