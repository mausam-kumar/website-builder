"use client"
import Editor from '@/components/Editor';
import ElementPanel from '@/components/ElementPanel';
import Button from '@/components/elements/Button';
import ButtonForm from '@/components/forms/ButtonForm';
import { EditorStateProvider } from '@/context/EditorStateProvider';

export default function Home() {

  return (
    <main className="p-24 bg-white min-h-screen flex space-x-10">
      <EditorStateProvider>
        <ElementPanel />
        <Editor />
        <div className='border rounded-sm shadow-lg p-4'>
          <ButtonForm text="Default Text" height={40} width={200} />
        </div>
      </EditorStateProvider>
    </main>
  );
}
