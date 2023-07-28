import React from "react";
import Task from "./Task";



function TaskList({ tasks, deleteTask }) {
  
  return (
    <div className="tasks">
      <ul className="taskList">
        {tasks.map((item) => (
          <Task task={item} key={item.id} deleteTask={deleteTask} text={item.text} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
