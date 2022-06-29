import React from "react";
import { Link } from "react-router-dom";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <>
      <Link to="/">HOME</Link>
      <TodoInput />
      <br />
      <br />
      <TodoList />
    </>
  );
};

export default Todos;
