"use client"
import Button from '@/components/elements/Button';
import ButtonForm from '@/components/forms/ButtonForm';

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
      <div className='shadow-lg rounded-sm p-4 space-y-6 flex flex-col w-fit'>
        {
          availableElement.map((_) => {
            return <Button key={_.name} text={_.text} variant="Desktop" />
          })
        }
      </div>
      <div>
        <ButtonForm text="Default Text" height={40} width={200} />
      </div>
    </main>
  );
}
