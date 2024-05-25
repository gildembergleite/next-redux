import { Accordion } from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ModulesContainer } from './modules-container'

export function AsideBar() {
  return (
    <aside className="absolute top-0 bottom-0 right-0 w-full max-w-80 border-l border-zinc-800">
      <ScrollArea className="h-full">
        <Accordion type="single" collapsible>
          <ModulesContainer />
        </Accordion>
      </ScrollArea>
    </aside>
  )
}
