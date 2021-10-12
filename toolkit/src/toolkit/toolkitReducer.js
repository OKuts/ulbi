import {createReducer} from "@reduxjs/toolkit";
import {createAction} from "@reduxjs/toolkit";


const initialState = {
  count: 0,
  todos: ['hello']
};

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const addTodo = createAction('ADD_TODO');
export const removeTodo = createAction('REMOVE_TODO');

export const toolkitReducer = createReducer(initialState, {
  [increment]: function (state) {state.count = state.count + 1},
  [decrement]: function (state) {state.count = state.count - 1},
  [addTodo]: function (state, action) {state.todos.push(action.payload)},
  [removeTodo]: function (state) {state.todos.pop()},
})
