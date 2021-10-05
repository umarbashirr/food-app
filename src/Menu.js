import React from 'react';
import Categories from './Categories';
import SingleItem from './SingleItem';

function Menu({ menuItems, filteredItems, categories }) {
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filteredItems={filteredItems} categories={categories} />
        <div className='section-center'>
          {menuItems.map((item) => (
            <SingleItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Menu;
