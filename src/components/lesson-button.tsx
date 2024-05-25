import { Lesson } from '@/@types/lesson'
import { setCurrentLesson } from '@/lib/features/player/player-slice'
import { useAppSelector } from '@/lib/store'
import { VideoIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Button } from './ui/button'

export function LessonButton(lesson: Lesson) {
  const dispatch = useDispatch()
  const leassonId = useAppSelector((state) => {
    const { moduleIndex, lessonIndex } = state.player.currentLesson
    return state.player.course.modules[moduleIndex].lessons[lessonIndex].id
  })

  return (
    <Button
      variant={'ghost'}
      className={`
        w-full justify-between items-center
        ${
          lesson.id === leassonId
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
