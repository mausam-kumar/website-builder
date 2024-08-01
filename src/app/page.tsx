"use client"
import PropertiesPanel from '@/components/PropertiesPanel';
import Editor from '@/components/UpdatedEditor';
import { EditorStateProvider } from '@/context/EditorStateProvider';
import { SelectedElementStateProvider } from '@/context/SelectedElementStateProvider';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {

  return (
    <main className="p-24 bg-white min-h-screen flex space-x-10">
      <DndProvider backend={HTML5Backend}>
        <EditorStateProvider>
          <SelectedElementStateProvider>
            <Editor />
            <PropertiesPanel />
          </SelectedElementStateProvider>
        </EditorStateProvider>
      </DndProvider>
    </main>
  );
}
