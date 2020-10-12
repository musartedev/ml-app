import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Item from '../components/common/Item';

import { itemResponse } from '../constants/dataExample';

const ItemDetail = () => {
  return (
    <>
      <Breadcrumb categories={itemResponse.item.categories} />
      <Item item={itemResponse.item} />
    </>
  );
};

export default ItemDetail;
