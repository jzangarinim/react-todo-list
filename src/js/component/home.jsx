import React, { useEffect, useState } from "react";
import TaskList from "./TaskList.jsx";
import InputField from "./InputField.jsx";
import TaskCounter from "./TaskCounter.jsx";

const URL = "https://assets.breatheco.de/apis/fake/todos/user";
const USER = "jzangarinim";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [view, setView] = useState({ display: "none" });
  const [count, setCount] = useState(0);
  const getTask = async () => {
    try {
      let response = await fetch(`${URL}/${USER}`);
      let data = await response.json();
      if (response.status == 404) {
        createUser();
      } else {
        setTodo(data);
        setCount(data.length);
      }
    } catch (err) {
      console.log(err);
    }
  };
  async function createUser() {
    try {
      let response = await fetch(`${URL}/${USER}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify([]),
      });
      if (response.ok) {
        getTask();
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function addTask() {
    try {
      let response = await fetch(`${URL}/${USER}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          ...todo,
          {
            label: task,
            done: false,
          },
        ]),
      });
      if (response.ok) {
        getTask();
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteUser() {
    try {
      let response = await fetch(`${URL}/${USER}`, {
        method: "DELETE",
      });
      createUser();
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteTask(arr) {
    try {
      let response = await fetch(`${URL}/${USER}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([...arr]),
      });
      if (response.ok) {
        setCount(count - 1);
      }
    } catch (err) {
      console.log(err);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodo([...todo, task]);
    addTask();
    getTask();
    setTask("");
    setCount(count + 1);
  }
  function handleDelete(e) {
    let newArray = todo.filter(
      (_, index) => index != e.target.parentElement.id
    );
    deleteTask(newArray);
    setTodo(newArray);
  }
  useEffect(() => {
    getTask();
  }, []);
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

      <button
        className="col-1 m-auto mt-3 d-flex justify-content-center"
        onClick={deleteUser}
      >
        Delete user
      </button>
    </>
  );
};

export default Home;
