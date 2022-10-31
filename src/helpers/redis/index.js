const redis = require('../../drivers/redis');
const { myLogger } = require('../logger');

const increment = (key) => new Promise(async (resolve) => {
  if (!redis.incr) {
    myLogger.error('redis_error', 'redis.incr is not a function!');
    resolve(null);
    return;
  }

  redis.incr(key, (err, id) => {
    if (err) {
      myLogger.error('redis_error', err?.message || err);
      resolve(null);
      return;
    }

    resolve(id);
  });
});

const getUniqueProcess = ({ key, expiredInSeconds = 0 }) => new Promise((resolve) => {
  if (!redis.incr) {
    resolve(true);

    return;
  }

  redis.incr(key, (err, id) => {
    if (id === 1 && expiredInSeconds > 0) {
      redis.expire(key, expiredInSeconds);
    }

    resolve(id === 1);
  });
});

const resetUniqueProcess = (key) => new Promise((resolve) => {
  if (!redis.set) {
    resolve(true);

    return;
  }

  redis.del(key);

  resolve(true);
});

const setRedis = ({ key, value, expiredInSeconds = 0 }) => new Promise((resolve) => {
  redis.set(key, JSON.stringify(value), 'EX', expiredInSeconds);
  resolve(true);
});

const getRedis = (key) => new Promise((resolve) => {
  redis.get(key, (err, value) => {
    if (err) {
      resolve(null);
      return;
    }

    resolve(JSON.parse(value));
  });
});

module.exports = {
  increment,
  getUniqueProcess,
  resetUniqueProcess,
  setRedis,
  getRedis,
};
