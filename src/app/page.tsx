import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-3 md:p-5 gap-y-5">
      <h2>Welcome to my Custom Rich text editor</h2>
      <p className="text-xs tracking-tighter md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia perferendis assumenda facere autem, eos totam cum magnam ex deleniti excepturi consectetur distinctio itaque nisi, fugit saepe, ea qui. Optio, eligendi.</p>

      <Link href={'/novel'} className="text-primary underline">Go to Novel Editor</Link>
      <ModeToggle />
    </main>
  );
}
