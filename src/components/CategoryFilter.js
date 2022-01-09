import React from "react";

function CategoryFilter({categories, onClick, selectedCategory}) {
  
  

  function handleClick(event){
    onClick(event.target.innerText)
  }
  
  



  const btn = categories.map((category) => {
    const className = (category === selectedCategory ? "selected" : "")
    return (
      <button onClick={handleClick} className={className} key={category}>{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btn}
    </div>
  );
}

export default CategoryFilter;
