'use client'

import { useCurrentContent } from '@/hooks/use-current-content'

export function Header() {
  const { lesson, module } = useCurrentContent()

  return (
    <header className="pr-12">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
        {lesson.title}
      </h1>
      <p className="text-muted-foreground">{module.title}</p>
    </header>
  )
}
