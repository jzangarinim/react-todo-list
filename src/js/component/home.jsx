import React, { useState } from "react";
import TaskList from "./TaskList.jsx";
import InputField from "./InputField.jsx";
import TaskCounter from "./TaskCounter.jsx";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [view, setView] = useState({ display: "none" });
  const [count, setCount] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setTodo([...todo, task]);
    setTask("");
    setCount(count + 1);
  }
  function handleDelete(e) {
    setCount(count - 1);
    e.target.parentElement.remove();
  }
  document.title = "Todo List: " + count;
  return (
    <>
      <TaskCounter count={count} />

      <InputField task={task} handleSubmit={handleSubmit} setTask={setTask} />

      <TaskList
        todo={todo}
        view={view}
        handleDelete={handleDelete}
        setView={setView}
      />
    </>
  );
};

export default Home;
