import '@babel/polyfill';
import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import App from './components/App';

const history = createBrowserHistory();

ReactDOM.hydrate(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);
