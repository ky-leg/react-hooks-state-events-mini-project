import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskText, setText] = useState("")
  const [taskCat, setCat] = useState("Code")

  function componentSubmit(event){
    event.preventDefault();
    const formData = {text: taskText, category: taskCat}
    console.log("in Task.js", formData)
    onTaskFormSubmit(formData)
  }

  function handleTaskChange(event){
    setText(event.target.value)
  }
  function handleCategoryChange(event){
    setCat(event.target.value)
  }
  return (
    <form onSubmit={componentSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTaskChange}/>
      </label>
      <label>
        Category
        <select name="category" value = {taskCat} onChange={handleCategoryChange}>
          {categories
          .filter((category) => category !== "All")
          .map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
