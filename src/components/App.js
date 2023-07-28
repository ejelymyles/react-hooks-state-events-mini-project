import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";


import { CATEGORIES, TASKS } from "../data";

function App() {

  const tasksWithID = TASKS.map((task) => ({
    ...task,
    id: uuid(),
  }));
  
  const [taskData, setTaskData] = useState(tasksWithID);
  const[selectedCategory, setSelectedCategory] = useState("All");


  function deleteButton(id){
    setTaskData((taskData) => taskData.filter((task) => task.id !== id))
  }


  function handleCategoryClick(category){
    setSelectedCategory(category)
  }
  
  const filteredTasks = selectedCategory === "All"
  ? taskData
  : taskData.filter((task) => task.category === selectedCategory);


function handleTaskSubmission(newTask){
  setTaskData([...taskData, newTask])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskSubmission} />
      <TaskList tasks={filteredTasks} deleteTask={deleteButton}/>
    </div>
  );
}


export default App;
