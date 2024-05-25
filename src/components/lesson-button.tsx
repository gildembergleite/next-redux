import { VideoIcon } from 'lucide-react'
import { Button } from './ui/button'

export function LessonButton() {
  return (
    <Button
      variant={'ghost'}
      className="w-full justify-between items-center mt-2 text-muted-foreground"
    >
      <div className="flex items-center gap-2">
        <VideoIcon size={16} />
        Titulo do video
      </div>
      <small className="font-mono">10:00</small>
    </Button>
  )
}
