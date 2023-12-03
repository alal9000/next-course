import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
import { Metadata } from "next";

export default function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("");

  return {
    title: "...",
    description: "..."
  };
}
