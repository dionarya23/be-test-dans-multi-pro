require('dotenv').config();

// eslint-disable-next-line
console.log('interface:', process.env.INTERFACE);

switch (process.env.INTERFACE) {
  case 'rest':
    require('./interfaces/http'); // eslint-disable-line 
    break;
  default:
    break;
}
