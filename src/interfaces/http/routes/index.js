const express = require('express');
const changeCase = require('change-case');
const routesV1 = require('require-dir')('./v1');

const router = express.Router();

router.get('/', (req, res) => res.send(`API job Positions for ${process.env.NODE_ENV}`));

Object.keys(routesV1).forEach((routeName) => {
  // eslint-disable-next-line
  router.use(`/v1/${changeCase.paramCase(routeName)}`, require(`./v1/${routeName}`)());
});

module.exports = router;
