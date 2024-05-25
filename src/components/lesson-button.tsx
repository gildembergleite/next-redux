import { Lesson } from '@/@types/lesson'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { useCurrentContent } from '@/hooks/use-current-content'
import { setCurrentLesson } from '@/lib/features/player/player-slice'
import { VideoIcon } from 'lucide-react'
import { Button } from './ui/button'

export function LessonButton(lesson: Lesson) {
  const dispatch = useAppDispatch()
  const {
    lesson: { id },
  } = useCurrentContent()

  return (
    <Button
      variant={'ghost'}
      className={`
        w-full justify-between items-center
        ${
          lesson.id === id
            ? 'text-emerald-500 hover:text-emerald-500'
            : 'text-muted-foreground'
        }  
      `}
      onClick={() => dispatch(setCurrentLesson(lesson))}
    >
      <div className="flex items-center gap-2">
        <VideoIcon size={16} />
        <p className="text-left truncate w-64">{lesson.title}</p>
      </div>
      <small className="font-mono">{lesson.duration}</small>
    </Button>
  )
}
