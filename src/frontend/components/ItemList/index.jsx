import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

import '../../styles/components/ItemList/index.scss';

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

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.shape({
        amount: PropTypes.number,
      }),
      free_shipping: PropTypes.bool,
      picture: PropTypes.string,
      address: PropTypes.string,
    })
  ),
};

ItemList.defaultProps = {
  items: [],
};

export default ItemList;
