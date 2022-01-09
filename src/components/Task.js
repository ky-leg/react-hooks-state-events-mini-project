import React from "react";

function Task({category, text, onClick }) {
  function handleClick(event){
    onClick(event.target.parentElement.id)
  }

  return (
    <div className="task" key={text} id={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
