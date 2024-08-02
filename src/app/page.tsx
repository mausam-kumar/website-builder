"use client"
import PropertiesPanel from '@/components/PropertiesPanel';
import Editor from '@/components/Editor';
import { EditorStateProvider } from '@/context/EditorStateProvider';
import { SelectedElementStateProvider } from '@/context/SelectedElementStateProvider';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Link from 'next/link';
import { Suspense } from 'react'

export default function Home() {

  return (
    <main className="px-24 pt-10 bg-white min-h-screen">
      <DndProvider backend={HTML5Backend}>
        <EditorStateProvider>
          <SelectedElementStateProvider>
            <div className='flex justify-center'>
              <Link href="/template" className='rounded w-fit bg-indigo-600 px-2 py-1 text-md font-md text-white shadow-sm'>View Saved Template</Link>
            </div>
            <div className='flex space-x-10 mt-10'>
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
