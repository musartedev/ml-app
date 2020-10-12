import React from 'react';
import Header from './Layout/Header';
import ItemList from './ItemList';

import dataExample from '../constants/dataExample';
import '../styles/components/App.scss';

const App = () => (
  <div>
    <Header />
    <ItemList items={dataExample.items} />
  </div>
);

export default App;
