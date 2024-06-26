import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
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
    addNewTodo: (state, action) => {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
        completed: false,
      })
    },
    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload.id)
      return state
    },
  },
})

export const todos = todosSlice.reducer
export const { addNewTodo, removeTodo } = todosSlice.actions
