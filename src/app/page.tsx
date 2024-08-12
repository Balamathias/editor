import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-3 md:p-5 gap-y-6">
      <div className="flex flex-col gap-y-6 max-w-3xl mx-auto">
        <h2 className="text-4xl leading-loose">Welcome to my Custom Rich text editor</h2>
        <p className="text-base tracking-tighter md:text-lg">
          Man, You just landed on my Premium Editor configuration.
          Flex the times as you explore the inherent features.
          AI is coming very soon,
          By the way, let me include other pluggins like undo and redo.
        </p>

        <Link href={'/novel'} className="w-fit text-primary py-2.5 px-3 rounded-xl bg-primary/15">Go to Novel Editor</Link>
        <ModeToggle />
      </div>
    </main>
  );
}
