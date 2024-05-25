import { describe, expect, it } from 'vitest'
import { nextLesson, player, setCurrentLesson } from './player-slice'

const exampleState = {
  course: {
    modules: [
      {
        id: '1',
        index: 1,
        title: 'title module 1',
        lessons: [
          { id: '1', title: 'title lesson 1', duration: '00:00:00' },
          { id: '2', title: 'title lesson 2', duration: '00:00:00' },
        ],
      },
      {
        id: '2',
        index: 2,
        title: 'title module 2',
        lessons: [
          { id: '3', title: 'title lesson 3', duration: '00:00:00' },
          { id: '4', title: 'title lesson 4', duration: '00:00:00' },
        ],
      },
    ],
  },
  currentLesson: { moduleIndex: 0, lessonIndex: 0 },
}

describe('player slice', () => {
  it('should be able to play', () => {
    const state = player(exampleState, setCurrentLesson({ id: '8G80nuEyDN4' }))

    expect(state.currentLesson.moduleIndex).toEqual(0)
    expect(state.currentLesson.lessonIndex).toEqual(0)
  })

  it('should be able to play next video automatically', () => {
    const state = player(exampleState, nextLesson())

    expect(state.currentLesson.moduleIndex).toEqual(0)
    expect(state.currentLesson.lessonIndex).toEqual(1)
  })

  it('should be able to play next module automatically', () => {
    const changeCurrentLessonState = {
      ...exampleState,
      currentLesson: { moduleIndex: 0, lessonIndex: 1 },
    }

    const state = player(changeCurrentLessonState, nextLesson())

    expect(state.currentLesson.moduleIndex).toEqual(1)
    expect(state.currentLesson.lessonIndex).toEqual(0)
  })

  it('should not update currentLesson if last lesson and last module', () => {
    const changeCurrentLessonState = {
      ...exampleState,
      currentLesson: { moduleIndex: 1, lessonIndex: 1 },
    }

    const state = player(changeCurrentLessonState, nextLesson())

    expect(state.currentLesson.moduleIndex).toEqual(1)
    expect(state.currentLesson.lessonIndex).toEqual(1)
  })
})
