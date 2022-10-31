const Joi = require('joi');

const validator = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = (object) => validator.validateAsync(object, {
  errors: {
    wrap: {
      label: '',
    },
  },
  request: object,
});
