import { AsideBar } from '@/components/aside-bar'
import { Header } from '@/components/header'
import { ReactPlayer } from '@/components/react-player'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center gap-8">
      <div className="flex flex-col w-full max-w-7xl justify-center items-center px-12">
        <div className="flex w-full justify-between items-center py-6">
          <Header />
          <Button className="gap-2">
            <MessageCircle size={16} />
            Deixar feedback
          </Button>
        </div>
        <main className="relative flex w-full rounded-md border border-zinc-800 bg-zinc-900 pr-80 overflow-hidden">
          <section className="w-full">
            <ReactPlayer />
          </section>
          <AsideBar />
        </main>
      </div>
    </div>
  )
}
