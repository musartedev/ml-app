import React from 'react';

import '../../styles/components/ItemList/index.scss';
import ItemCard from './ItemCard';

const ItemList = ({ items }) => {
  return (
    <section className="container">
      <ul className="Item-list">
        {items.map(item => (
          <li key={item.id}>
            <ItemCard data={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemList;
