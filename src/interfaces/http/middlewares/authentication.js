const httpErrors = require('http-errors');
const jwt = require('jsonwebtoken');

const { myLogger } = require('../../../helpers/logger');
const { name: packageName } = require('../../../../package.json');

const filePath = 'src/interfaces/http/middlewares/authentication';

module.exports = () => async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (typeof authorization !== 'undefined') {
      const token = authorization
        .replace(/bearer/gi, '')
        .replace(/ /g, '');

      const payload = jwt.verify(token, process.env.SECRET_JWT);
      req.userAccessToken = token;
      req.payload = payload;
      return next();
    }
    return next(httpErrors.Unauthorized('Anda tidak mempunyai akses'));
  } catch (error) {
    let errorMessage = error?.message || error;
    myLogger.error(`${filePath}`, {
      url: req.originalUrl,
      method: req.method,
      message: errorMessage,
    });
    if (process.env.NODE_ENV !== 'production') {
      errorMessage = `${packageName} ${req.method} ${req.originalUrl} - ${errorMessage}`;
    }
    return next(httpErrors.Unauthorized(errorMessage));
  }
};
