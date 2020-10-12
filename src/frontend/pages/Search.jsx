import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ItemList from '../components/common/ItemList';

import { searchResults } from '../constants/dataExample';

const Search = () => {
  return (
    <>
      <Breadcrumb categories={searchResults.categories} />
      <ItemList items={searchResults.items} />
    </>
  );
};

export default Search;
