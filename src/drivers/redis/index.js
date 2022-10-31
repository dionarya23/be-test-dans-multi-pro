const { createClient } = require('redis');
const { myLogger } = require('../../helpers/logger');

let client = {};

if (process.env.REDIS_ENABLE === 'TRUE') {
  client = createClient({
    url: process.env.REDIS_URL,
    prefix: `o2o-doctor-service-${process.env.NODE_ENV}-`,
    tls: process.env.REDIS_TLS === 'TRUE' ? {} : undefined,
  });

  client.on('connect', () => {
    myLogger.info('redis', 'Client connected to redis...');
  });

  client.on('reconnecting', () => {
    myLogger.error('redis', 'reconnecting');
  });

  client.on('ready', () => {
    myLogger.info('redis', 'Client ready to redis...');
  });

  client.on('warning', (err) => {
    myLogger.error('redis', 'warning', err);
  });

  client.on('end', () => {
    myLogger.error('redis', 'end');
  });

  client.on('error', (err) => {
    myLogger.error('redis', err);
  });
}

module.exports = client;
