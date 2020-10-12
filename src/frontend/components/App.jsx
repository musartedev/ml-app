import React from 'react';
import Header from './Layout/Header';
import BreadCrumb from './common/Breadcrumb';
import ItemList from './ItemList';

import dataExample from '../constants/dataExample';
import '../styles/components/App.scss';

const App = () => (
  <div>
    <Header />
    <BreadCrumb categories={dataExample.categories} />
    <ItemList items={dataExample.items} />
  </div>
);

export default App;
