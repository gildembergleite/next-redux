import { useAppSelector } from './use-app-selector'

export function useCurrentContent() {
  const currentContent = useAppSelector((state) => {
    const { moduleIndex, lessonIndex } = state.player.currentLesson

    const data = {
      module: {
        ...state.player.course.modules[moduleIndex],
        currentIndex: moduleIndex,
      },
      lesson: {
        ...state.player.course.modules[moduleIndex].lessons[lessonIndex],
        currentIndex: lessonIndex,
      },
    }

    return { ...data }
  })

  return currentContent
}
