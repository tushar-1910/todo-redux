import { Route, Routes } from "react-router-dom";
import TodoDetails from "./Components/TodoDetails";
import Todos from "./Components/Todos";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </div>
  );
}
