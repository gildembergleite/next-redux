import { configureStore } from '@reduxjs/toolkit'
import { player } from './features/player/player-slice'
import { todos } from './features/todos/todos-slice'

export const store = configureStore({
  reducer: {
    todos,
    player,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
