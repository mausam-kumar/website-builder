"use-client"
import { sampleTemplate } from "@/utils/constant";
import {
    createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from "react";

type Element = {
    id: number
    type: string;
    props: Record<string, string | number>;
}

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
    const [editorState, setEditorState] = useState(sampleTemplate.ecommerce);

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