"use-client"
import {
    createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from "react";
import { Element } from "../../type";

type EditorState = {
    selectedElement: Element | null;
    setSelectedElement: Dispatch<SetStateAction<Element | null >>;
}

const SelectedElementStateContext = createContext<EditorState>(null!);

export const SelectedElementStateProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [selectedElement, setSelectedElement] = useState<Element | null >(null);

    return (
        <SelectedElementStateContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                selectedElement,
                setSelectedElement,
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