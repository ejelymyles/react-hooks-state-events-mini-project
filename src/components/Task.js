import React from "react";


function Task({ task, deleteTask, text, category }) {

  function handleDeleteClick(){
    deleteTask(task.id)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
