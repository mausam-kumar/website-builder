"use-client"
import {
    createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from "react";
import { Element } from "../../type";

type EditorState = {
    previewData: Element[];
    setPreviewData: Dispatch<SetStateAction<Element[]>>
}

const PreviewDataContext = createContext<EditorState>(null!);

export const PreviewDataProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [previewData, setPreviewData] = useState<Element[]>([]);
    return (
        <PreviewDataContext.Provider
            value={{
                previewData,
                setPreviewData
            }}
        >
            {children}
        </PreviewDataContext.Provider>
    );
};

export const usePreviewDataContext = () => {
    const context = useContext(PreviewDataContext);
    if (!context) {
        throw new Error(
            "usePreviewDataContext must be used within a PreviewDataProvider",
        );
    }
    return context;
};