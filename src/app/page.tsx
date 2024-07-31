import Button from "@/components/elements/Button";
import DynamicImage from "@/components/elements/Image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button text="Demo Button" />
      <DynamicImage height={600} width={1200} />
    </main>
  );
}
