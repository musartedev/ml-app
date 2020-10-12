import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ItemList from '../components/common/ItemList';

import dataExample from '../constants/dataExample';

const Search = () => {
  return (
    <>
      <Breadcrumb categories={dataExample.categories} />
      <ItemList items={dataExample.items} />
    </>
  );
};

export default Search;
