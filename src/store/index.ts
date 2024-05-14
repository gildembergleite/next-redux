import { configureStore, createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 2,
      text: 'Go to the market',
      completed: true,
    },
  ],
  reducers: {
    add: (state, action) => {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
        completed: false,
      })
    },
  },
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})

export const { add } = todoSlice.actions

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
