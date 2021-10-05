import React, { useState } from 'react';
import Menu from './Menu';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filteredItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    let newItem = items.filter((item) => item.category === category);
    return setMenuItems(newItem);
  };
  return (
    <Menu
      menuItems={menuItems}
      categories={categories}
      filteredItems={filteredItems}
    />
  );
}

export default App;
