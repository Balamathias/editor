import NovelEditor from "@/components/novel/editor";

export default function Page() {
  return (
    <div className='min-h-screen max-w-7xl mx-auto bg-gradient from-background via-background/80 to-background/90'>
        <div>
            <NovelEditor />
        </div>
    </div>
  )
}