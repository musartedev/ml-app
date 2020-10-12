import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

import '../../../styles/components/ItemList/index.scss';

const ItemList = ({ items }) => {
  return (
    <section className="Item-list__container container">
      <ul className="Item-list">
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`} className="no-decoration">
              <ItemCard data={item} />
            </Link>
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
      price: PropTypes.string,
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
