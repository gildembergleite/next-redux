'use client'

import { useAppSelector } from '@/lib/store'

export function Header() {
  const { leassonTitle, moduleTitle } = useAppSelector((state) => {
    const { moduleIndex, lessonIndex } = state.player.currentLesson
    const leassonTitle =
      state.player.course.modules[moduleIndex].lessons[lessonIndex].title
    const moduleTitle = state.player.course.modules[moduleIndex].title
    return { leassonTitle, moduleTitle }
  })

  return (
    <header className="pr-12">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
        {leassonTitle}
      </h1>
      <p className="text-muted-foreground">{moduleTitle}</p>
    </header>
  )
}
