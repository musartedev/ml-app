/* eslint-disable global-require */
/* eslint-disable no-console */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import favicon from 'serve-favicon';
import path from 'path';

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
}

app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));

const cb = (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Mercado Libre</title>
      <link rel="stylesheet" href="assets/app.css" type="text/css" />
      <meta
        name="description"
        content="La comunidad de compra y venta online más grande de América Latina."
      />
    </head>
    <body>
      <div id="app"></div>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
  </html>
  `);
};

app.get('*', cb);

app.listen(PORT, err => {
  if (err) console.error(err);
  else console.log(`Magic happens on port ${PORT}`);
});
