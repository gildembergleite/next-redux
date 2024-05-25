'use client'

import { useAppSelector } from '@/lib/store'
import { ModuleItem } from './module-item'
import { Accordion } from './ui/accordion'

export function ModulesContainer() {
  const { modules, currentModuleId } = useAppSelector((state) => {
    const { modules } = state.player.course
    const { moduleIndex } = state.player.currentLesson

    return {
      modules,
      currentModuleId: modules[moduleIndex].id,
    }
  })

  return (
    <Accordion defaultValue={currentModuleId} type="single" collapsible>
      {modules.map((module) => (
        <ModuleItem key={module.id} {...module} />
      ))}
    </Accordion>
  )
}
