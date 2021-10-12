import {createSlice} from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: {
    count: 0,
    todos: ['hello'],
  },
  reducers: {
    increment: state => {state.count = state.count + 1},
    decrement: state => {state.count = state.count - 1},
    addTodo: (state, action) => {state.todos.push(action.payload)},
    removeTodo: state => {state.todos.pop()},
  },
})

// export const selectCount = state => state.toolkit.count;
export const {increment, decrement, removeTodo, addTodo} = toolkitSlice.actions

export default toolkitSlice.reducer;
