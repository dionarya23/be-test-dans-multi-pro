const Joi = require('joi');

const validator = Joi.object({
  id: Joi.number().required(),
});

module.exports = (object) => validator.validateAsync(object, {
  errors: {
    wrap: {
      label: '',
    },
  },
  request: object,
});
