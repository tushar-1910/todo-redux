import { EDIT_TODO_DB, GET_TODO_ERROR, GET_TODO_LOADING } from "./actionTypes";

export const editTodoDb = (payload) => {
  return {
    type: EDIT_TODO_DB,
    payload
  };
};
export const getTodoLoading = (payload) => {
  return {
    type: GET_TODO_LOADING,
    payload
  };
};
export const getTodoError = (payload) => {
  return {
    type: GET_TODO_ERROR,
    payload
  };
};
