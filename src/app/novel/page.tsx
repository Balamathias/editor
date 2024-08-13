import ModeToggle from "@/components/mode-toggle";
import NovelEditor from "@/components/novel/editor";

export default function Page() {
  return (
    <div className='min-h-screen max-w-7xl p-4 px-2.5 md:px-4 mx-auto'>
      <ModeToggle />
        <div>
            <NovelEditor />
        </div>
    </div>
  )
}