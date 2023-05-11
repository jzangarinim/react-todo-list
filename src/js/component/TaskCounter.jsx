import React from "react";

const TaskCounter = (props) => {
  return (
    <div className="counter col-3 m-auto mt-3 text-center fs-4">
      <h1>
        {props.count === 1
          ? `${props.count} task left to do`
          : `${props.count} tasks left to do`}
      </h1>
    </div>
  );
};

export default TaskCounter;
