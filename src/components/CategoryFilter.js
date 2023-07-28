import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div>
        {categories.map((item) => (
          <button onClick={() => onCategoryClick(item)} key={item} className={item === selectedCategory ? "selected" : ""}>{item}</button>
        ))}
      </div>
     
    </div>
  );
}


export default CategoryFilter;



//pick up on what should happen when the button is clicked!