/* eslint-disable global-require */
/* eslint-disable no-console */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import favicon from 'serve-favicon';
import path from 'path';
import React from 'react';
import helmet from 'helmet';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import ROUTES from '../frontend/router/routes';
import Layout from '../frontend/components/Layout';
import getManifest from './getManifest';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Super! You are in Development Mode. ');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler, serverConfig));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) {
      req.hashManifest = getManifest();
    }

    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));

const setResponse = (html, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Mercado Libre</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      <meta
      name="description"
      content="La comunidad de compra y venta online más grande de América Latina."
      />
      <base href="/" />
      <link rel="stylesheet" href="${mainStyles}" type="text/css" />
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="${mainBuild}" type="text/javascript"></script>
      <script src="${vendorBuild}" type="text/javascript"></script>
    </body>
  </html>`;
};

const renderApp = (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Layout>{renderRoutes(ROUTES)}</Layout>
    </StaticRouter>
  );

  res.send(setResponse(html, req.hashManifest));
};

app.get('*', renderApp);

app.listen(PORT, err => {
  if (err) console.error(err);
  else console.log(`Magic happens on port ${PORT}`);
});
