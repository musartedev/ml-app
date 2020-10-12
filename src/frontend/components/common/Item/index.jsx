/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import '../../../styles/components/common/Item.scss';

const Item = ({
  item: { title, picture, price, condition, sold_quantity, description },
}) => {
  return (
    <article className="Item container">
      <div className="Item__content">
        <div className="Item__hero">
          <figure className="Item__picture">
            <img src={picture} alt="" />
          </figure>
          <div className="Item__info">
            <div className="Item__condition">
              <span className="condition__status">
                {condition === 'new' ? 'Nuevo' : 'Usado'}
              </span>
              <span className="condition__sold-quantity">{`${sold_quantity} vendidos`}</span>
            </div>
            <h1>{title}</h1>
            {price && <p className="Item__price">{price}</p>}
            <div className="Item__action">
              <Button title="Comprar" onClick={() => {}} />
            </div>
          </div>
        </div>
        <div className="Item__description">
          <h3>Descripción del Producto</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    picture: PropTypes.string,
    pice: PropTypes.string,
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default Item;
