import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTodoDb, getTodoError, getTodoLoading } from "../Redux/action";

const TodoDetails = () => {
  const { id } = useParams();
  const { todos } = useSelector((state) => state);
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

  const toggleData = async (payload) => {
    try {
      dispatch(getTodoLoading());
      payload.status = !payload.status;
      await fetch(`http://localhost:8080/todos/${payload.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      getData();
      // console.log("updated");
    } catch (error) {
      dispatch(getTodoError());
      console.log(error);
    }
  };
  const handleDelte = async (id) => {
    try {
      dispatch(getTodoLoading());
      await fetch(`http://localhost:8080/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      dispatch(getTodoError());
    }
  };

  const handleToggle = (item) => {
    toggleData(item);
  };

  const deleteItem = (itemId) => {
    handleDelte(itemId);
    navigate("/");
  };

  return (
    <div>
      {todos
        .filter((item) => {
          return item.id === id;
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <h4>{`${item.title} --- ${
                item.status ? "Completed" : "Not Completed"
              }`}</h4>
              <button onClick={() => handleToggle(item)}>Toggle</button>
              <button onClick={() => deleteItem(item.id)}>DELETE</button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoDetails;
