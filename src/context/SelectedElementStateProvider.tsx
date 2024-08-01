"use-client"
import {
    createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from "react";

type SelectedElement = { selectedElementId: number | string | null }

type EditorState = {
    editorState: SelectedElement;
    setEditorState: Dispatch<SetStateAction<SelectedElement>>;
}

const SelectedElementStateContext = createContext<EditorState>(null!);

export const SelectedElementStateProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [editorState, setEditorState] = useState<SelectedElement>({ selectedElementId: null });

    return (
        <SelectedElementStateContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                editorState,
                setEditorState,
            }}
        >
            {children}
        </SelectedElementStateContext.Provider>
    );
};

export const useSelectedElementStateContext = () => {
    const context = useContext(SelectedElementStateContext);
    if (!context) {
        throw new Error(
            "useSelectedElementStateContext must be used within a SelectedElementStateProvider",
        );
    }
    return context;
};