const express = require('express');
const expressUserAgent = require('express-useragent');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const httpErrors = require('http-errors');
require('dotenv').config();

const { myLogger } = require('../../helpers/logger/index');
const errorHandler = require('./middlewares/errorHandler');
const rawBody = require('./middlewares/rawBody');
const rawHeader = require('./middlewares/rawHeader');
const routes = require('./routes/index');

const app = express();

const basePath = process.env.BASE_PATH || '/';

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
} else {
  app.use(helmet({
    frameguard: false,
  }));
}
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: 1024102420, type: 'application/json' }));
app.use(rawBody);
app.use(rawHeader);
app.use(expressUserAgent.express());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(basePath, express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.send(`API Job Positions for ${process.env.NODE_ENV}`));
app.use(basePath, routes);

app.use((req, res, next) => {
  next(httpErrors.NotFound());
});

app.use(errorHandler);

app.listen(process.env.REST_PORT || 3000);

myLogger.info(
  'express',
  `Server running on port: ${process.env.REST_PORT || 3000}`,
);

module.exports = app;
