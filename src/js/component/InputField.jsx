import React from "react";

const InputField = (props) => {
  return (
    <div className="col-3 m-auto">
      <form onSubmit={props.handleSubmit}>
        <input
          autoFocus
          className="w-100 fs-3 mt-1 rounded"
          type="text"
          required
          value={props.task}
          onChange={(e) => props.setTask(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default InputField;
