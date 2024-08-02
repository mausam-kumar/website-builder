"use client"
import PropertiesPanel from '@/components/PropertiesPanel';
import Editor from '@/components/Editor';
import { EditorStateProvider } from '@/context/EditorStateProvider';
import { SelectedElementStateProvider } from '@/context/SelectedElementStateProvider';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Suspense } from 'react'
import Header from '@/components/Header';

export default function Home() {

  return (
    <main className="px-6 bg-white min-h-screen">
      <DndProvider backend={HTML5Backend}>
        <EditorStateProvider>
          <SelectedElementStateProvider>
            <Header />
            <div className='flex space-x-10'>
              <Suspense>
                <Editor />
              </Suspense>
              <PropertiesPanel />
            </div>
          </SelectedElementStateProvider>
        </EditorStateProvider>
      </DndProvider>
    </main>
  );
}
