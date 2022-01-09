import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES })
console.log({ TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("");
  
  function onCategoryClick(category){
    setCategory(category)
    
    setTasks(category === "All" ?
    TASKS : 
    TASKS.filter(
      (item) => item.category===category)
      )
  }

  function deleteItem(taskID){
    const newList = tasks.filter((item) => item.text !== taskID)
    setTasks(newList)
  }

  function onTaskFormSubmit(newItem){
    // console.log("in App.js", newItem)
    setTasks([...TASKS, newItem])
  }


  return (
    <div className="App">
      {console.log(tasks)}
      <h2>My tasks</h2>
      <CategoryFilter 
      selectedCategory={category}
      categories={CATEGORIES} 
      onClick={onCategoryClick}/>
      <NewTaskForm 
      categories={CATEGORIES} 
      onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} deleteItem={deleteItem}/>
    </div>
  );
}

export default App; 