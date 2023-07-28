import React from "react";
import Task from "./Task";



function TaskList({ taskData, deleteTask }) {
  
  return (
    <div className="tasks">
      <ul className="taskList">
        {taskData.map((item) => (
          <Task task={item} key={item.id} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
