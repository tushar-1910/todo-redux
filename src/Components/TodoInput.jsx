import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { editTodoDb, getTodoError, getTodoLoading } from "../Redux/action";

const TodoInput = () => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

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

  const addTodo = async (payload) => {
    try {
      dispatch(getTodoLoading());
      fetch(`http://localhost:8080/todos`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      dispatch(getTodoError());
    }
  };

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };

    addTodo(payload).then(() => {
      getData();
    });
  };
  return (
    <div>
      <h3>Add Todo</h3>
      <input
        type="text"
        placeholder="Add"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default TodoInput;
