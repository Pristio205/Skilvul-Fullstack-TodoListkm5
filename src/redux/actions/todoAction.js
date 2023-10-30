import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './todoReducer';

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
