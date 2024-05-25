import { Module } from '@/@types/module'
import { useAppSelector } from '@/lib/store'
import { LessonButton } from './lesson-button'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export function ModuleItem(module: Module) {
  const moduleId = useAppSelector((state) => {
    const { moduleIndex } = state.player.currentLesson
    return state.player.course.modules[moduleIndex].id
  })

  return (
    <AccordionItem value={module.id}>
      <AccordionTrigger className="bg-zinc-800 px-3">
        <div className="flex items-center gap-3">
          <div
            className={`
            flex h-10 w-10 justify-center items-center rounded-full bg-zinc-950 border-2 border-zinc-950
            ${
              module.id === moduleId &&
              'font-bold text-emerald-500 border-emerald-500'
            }
          `}
          >
            {module.index}
          </div>
          <div className="text-left">
            <h3>{module.title}</h3>
            <p className="text-muted-foreground text-xs">
              {module.lessons.length} aulas
            </p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-0 pb-2">
        <nav>
          {module.lessons.map((lesson) => (
            <LessonButton key={lesson.id} {...lesson} />
          ))}
        </nav>
      </AccordionContent>
    </AccordionItem>
  )
}
