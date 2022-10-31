const Dao = require('./dao');
const { myLogger } = require('../../helpers/logger');
const { checkPassword } = require('../../helpers/bcrypt');
const { generateJWT } = require('../../helpers/jwt');

const filePath = 'src/domains/user/business';

module.exports = class {
  constructor() {
    this.dao = new Dao();
  }

  async login({
    username,
    password,
  }) {
    try {
      const user = await this.dao.getByUsername({
        username,
      });

      if (!user) {
        throw new Error('User not found');
      }

      if (!await checkPassword(password, user.password)) {
        throw new Error('Password is incorrect');
      }

      const token = generateJWT({
        id: user.id,
        username: user.username,
      });

      return {
        token,
      };
    } catch (error) {
      myLogger.error(`${filePath}/user`, error?.message || error);

      throw error;
    }
  }
};
