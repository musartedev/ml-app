import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoadingContextProvider } from '../context/Loading';
import { SearchTermContextProvider } from '../context/SearchTerm';
import Layout from './Layout';
import Router from '../router';

import '../styles/components/App.scss';

const App = () => (
  <LoadingContextProvider>
    <SearchTermContextProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </SearchTermContextProvider>
  </LoadingContextProvider>
);

export default App;
