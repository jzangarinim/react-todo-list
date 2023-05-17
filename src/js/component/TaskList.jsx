import React from "react";

const TaskList = (props) => {
  return (
    <div>
      <ul className="col-3 m-auto mt-3 fs-5 ps-0" id="list">
        {props.todo.map((todo, index) => {
          return (
            <li
              key={`li${index}`}
              id={index}
              className="mt-1 p-3"
              onMouseEnter={() => {
                props.setView({ display: "inline-block" });
              }}
              onMouseLeave={() => {
                props.setView({ display: "none" });
              }}
            >
              {todo.label}
              <button
                style={props.view}
                key={`btn${index}`}
                className="btn btn-light border border-dark float-end h-100"
                onClick={props.handleDelete}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
