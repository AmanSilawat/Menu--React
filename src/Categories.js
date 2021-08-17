import React from 'react';

const Categories = ({ filter_items, categories }) => {
  return (
    <div className="btn-container">
      {categories.map(category => (
        <button
          key={category}
          className="filter-btn"
          onClick={() => { filter_items(category) }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
