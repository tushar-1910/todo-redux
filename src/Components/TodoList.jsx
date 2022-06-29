import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { editTodoDb, getTodoError, getTodoLoading } from "../Redux/action";

const TodoList = () => {
  const { todos, isloading, iserror } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      dispatch(getTodoLoading());
      const res = await fetch(`http://localhost:8080/todos`);
      const data = await res.json();
      dispatch(editTodoDb(data));
    } catch (error) {
      dispatch(getTodoError());
    }
  };

  React.useEffect(() => {
    getData();
  }, [dispatch]);

  if (isloading) {
    return <h1>Loading...</h1>;
  }
  if (iserror) {
    return <h1>Error...</h1>;
  }
  return (
    <div>
      <h3>TODO LIST</h3>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`todo/${item.id}`}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
