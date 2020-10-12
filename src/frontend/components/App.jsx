import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Router from '../router';

import '../styles/components/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>
);

export default App;
