const express = require('express');

const {
  list,
  detail,
} = require('../../controllers/v1/job-position');

const Authentication = require('../../middlewares/authentication');

module.exports = () => {
  const router = express.Router();

  router.get('/positions', Authentication(), list);
  router.get('/positions/:id', Authentication(), detail);

  return router;
};
