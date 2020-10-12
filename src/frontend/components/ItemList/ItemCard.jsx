/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import FreeShippingIcon from '../../assets/img/icons/shipping.png';
import '../../styles/components/ItemList/ItemCard.scss';

const Item = ({ data: { title, price, free_shipping, picture, address } }) => {
  return (
    <div className="Item-card">
      <div className="Item-card__picture">
        <img src={picture} alt={title} />
      </div>
      <div className="Item-card__info">
        <div className="Item-card__price">
          <span>{`$ ${price.amount}`}</span>
          {free_shipping && <img src={FreeShippingIcon} alt="Free Shipping" />}
        </div>
        <div className="Item-card__title">
          <h2>{title}</h2>
          <span className="Item-card__address">{address}</span>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.shape({
      amount: PropTypes.number,
    }),
    free_shipping: PropTypes.bool,
    picture: PropTypes.string,
    address: PropTypes.string,
  }),
};

Item.defaultProps = {
  data: {},
};

export default Item;
