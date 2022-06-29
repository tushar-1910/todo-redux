import { EDIT_TODO_DB, GET_TODO_ERROR, GET_TODO_LOADING } from "./actionTypes";

const initStore = {
  todos: [],
  loading: false,
  error: false
};

const reducer = (store = initStore, { type, payload }) => {
  switch (type) {
    case EDIT_TODO_DB: {
      return {
        ...store,
        todos: payload,
        loading: false,
        error: false
      };
    }
    case GET_TODO_LOADING: {
      return {
        ...store,
        todos: [],
        loading: true,
        error: false
      };
    }
    case GET_TODO_ERROR: {
      return {
        ...store,
        todos: [],
        loading: false,
        error: true
      };
    }
    default: {
      return store;
    }
  }
};

export { reducer };
