import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const all_categories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menu_items, set_menu_items] = useState(items)
  const [categories] = useState(all_categories)

  const filter_items = (category) => {
    console.log('category', category);
    if (category === 'all') {
      set_menu_items(items);
      return;
    }
    const new_items = items.filter(item => item.category === category)
    set_menu_items(new_items)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filter_items={filter_items} categories={categories} />
        <Menu menu_items={menu_items} />
      </section>
    </main>
  );
}

export default App;
