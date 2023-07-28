import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formInput, setFormInput] = useState("")
  const [categorySelect, setCategorySelect] = useState("Food")

  function handleFormInput(event){
    setFormInput(event.target.value);
  }

  function handleCategorySelection(event){
    setCategorySelect(event.target.value)
  }

  const categoriesWithoutAll = categories.filter((item) => item !== "All" )

  
  function addTask(event){
    event.preventDefault()
    const newTask ={
      id: uuid(),
      text: formInput,
      category: categorySelect,
    }
    onTaskFormSubmit(newTask)

    setFormInput("");
    setCategorySelect("Food");
   }

 
  return (
    <form className="new-task-form" onSubmit={addTask} >
      <label>
        Details
        <input type="text" name="text" value={formInput} onChange={handleFormInput}/>
      </label>
      <label>
        Category
        <select name="category" value={categorySelect} onChange={handleCategorySelection}>
          {categoriesWithoutAll.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

