"use client"
import Preview from "@/components/Preview";
import { EditorStateProvider } from "@/context/EditorStateProvider";
import { PreviewDataProvider } from "@/context/PreviewDataProvider";
import { SelectedElementStateProvider } from "@/context/SelectedElementStateProvider";

const PreviewTemplate = () => {
    return <EditorStateProvider>
        <SelectedElementStateProvider>
            <PreviewDataProvider>
                <Preview templateId=""/>
            </PreviewDataProvider>
        </SelectedElementStateProvider>
    </EditorStateProvider>
};

export default PreviewTemplate