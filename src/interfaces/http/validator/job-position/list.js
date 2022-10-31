const Joi = require('joi');

const validator = Joi.object({
  description: Joi.string().optional(),
  location: Joi.string().optional(),
  full_time: Joi.boolean().optional(),
  page: Joi.number().required(),
});

module.exports = (object) => validator.validateAsync(object, {
  errors: {
    wrap: {
      label: '',
    },
  },
  request: object,
});
