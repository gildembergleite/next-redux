'use client'

import { useAppSelector } from '@/lib/store'
import { ModuleItem } from './module-item'

export function ModulesContainer() {
  const modules = useAppSelector((state) => {
    return state.player.course.modules
  })

  return (
    <>
      {modules.map((module) => (
        <ModuleItem key={module.id} {...module} />
      ))}
    </>
  )
}
