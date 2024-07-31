"use client"
import Editor from '@/components/Editor';
import Button from '@/components/elements/Button';
import ButtonForm from '@/components/forms/ButtonForm';
import { EditorStateProvider } from '@/context/EditorStateProvider';

export default function Home() {

  const availableElement = [{
    name: "image",
    text: "Add Image"
  }, {
    name: "button",
    text: "Add Button"
  }]

  return (
    <main className="p-24 bg-white min-h-screen flex space-x-10">
      <EditorStateProvider>
        <div className='shadow-lg rounded-sm p-4 space-y-6 flex flex-col w-fit'>
          {
            availableElement.map((_) => {
              return <Button key={_.name} text={_.text} variant="Desktop" />
            })
          }
        </div>
        <Editor />
        <div className='border rounded-sm shadow-lg p-4'>
          <ButtonForm text="Default Text" height={40} width={200} />
        </div>
      </EditorStateProvider>
    </main>
  );
}
