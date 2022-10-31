const express = require('express');

const {
  login,
} = require('../../controllers/v1/user');

module.exports = () => {
  const router = express.Router();

  router.post('/login', login);

  return router;
};
