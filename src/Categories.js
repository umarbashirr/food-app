import React from 'react';

function Categories({ categories, filteredItems }) {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            className='filter-btn'
            onClick={() => {
              filteredItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
