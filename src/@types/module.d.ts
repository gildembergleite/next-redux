import { Lesson } from './lesson'

export type Module = {
  id: string
  index: number
  title: string
  lessons: Lesson[]
}
