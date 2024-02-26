// todoActions.js
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_PRIORITY } from './types';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const setPriority = ({ id, priority }) => ({
  type: SET_PRIORITY,
  payload: { id, priority },
});
