'use client'

import { useAppSelector } from '@/hooks/use-app-selector'
import { useCurrentContent } from '@/hooks/use-current-content'
import { ModuleItem } from './module-item'
import { Accordion } from './ui/accordion'

export function ModulesContainer() {
  const { modules } = useAppSelector((state) => {
    return state.player.course
  })
  const {
    module: { id },
  } = useCurrentContent()

  return (
    <Accordion defaultValue={id} type="single" collapsible>
      {modules.map((module) => (
        <ModuleItem key={module.id} {...module} />
      ))}
    </Accordion>
  )
}
