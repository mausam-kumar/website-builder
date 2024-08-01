"use client"
import Editor from '@/components/Editor';
import ElementPanel from '@/components/ElementPanel';
import ButtonForm from '@/components/forms/ButtonForm';
import { EditorStateProvider } from '@/context/EditorStateProvider';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";

export default function Home() {

  return (
    <main className="p-24 bg-white min-h-screen flex space-x-10">
      <DndProvider backend={HTML5Backend}>
      <EditorStateProvider>
        <ElementPanel />
        <Editor />
        <div className='border rounded-sm shadow-lg p-4'>
          <ButtonForm text="Default Text" height={40} width={200} />
        </div>
      </EditorStateProvider>
      </DndProvider>
    </main>
  );
}
