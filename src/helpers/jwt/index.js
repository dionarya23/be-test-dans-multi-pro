const jwt = require('jsonwebtoken');

const generateJWT = (payload) => jwt.sign(payload, process.env.SECRET_JWT, {
  expiresIn: '24h',
});

module.exports = {
  generateJWT,
};
