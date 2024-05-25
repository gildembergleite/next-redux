import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initial-state'

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentLesson: (state, action) => {
      state.course.modules.forEach((module, moduleIndex) => {
        const lessonIndex = module.lessons.findIndex(
          (lesson) => lesson.id === action.payload.id,
        )

        if (lessonIndex !== -1) {
          state.currentLesson = { moduleIndex, lessonIndex }
        }
      })

      return state
    },
    nextLesson: (state) => {
      const { moduleIndex, lessonIndex } = state.currentLesson

      const { lessons } = state.course.modules[moduleIndex]

      const isLastLesson = lessons.length - 1 === lessonIndex
      const isLastModule = state.course.modules.length - 1 === moduleIndex

      if (isLastLesson && !isLastModule) {
        state.currentLesson = { moduleIndex: moduleIndex + 1, lessonIndex: 0 }
      } else if (!isLastLesson && !isLastModule) {
        state.currentLesson = { moduleIndex, lessonIndex: lessonIndex + 1 }
      }

      return state
    },
  },
})

export const player = playerSlice.reducer
export const { setCurrentLesson, nextLesson } = playerSlice.actions
