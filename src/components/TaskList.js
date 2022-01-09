import React from "react";
import Task from "./Task.js";


function TaskList({tasks, deleteItem}) {

  function onDelete(taskID){
    deleteItem(taskID)
  }

  return (
    <div className="tasks">
      {tasks.map((item) => (
      <Task 
      className="selected"
      key={item.text}
      category={item.category}
      text={item.text}
      onClick={onDelete}
       />))}
    </div>
  );
}

export default TaskList;
