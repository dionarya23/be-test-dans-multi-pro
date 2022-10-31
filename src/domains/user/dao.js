const {
  User,
} = require('../../drivers/sequelize/models');
const { myLogger } = require('../../helpers/logger');

const filePath = 'src/domains/user/dao';
module.exports = class {
  constructor() {
    this.user = User;
  }

  async getByUsername({ username }) {
    try {
      const condition = {
        username,
      };

      const user = await this.user.findOne({
        where: condition,
      });

      return user;
    } catch (error) {
      myLogger.error(`${filePath}/getByUsername`, error?.message || error);

      throw error;
    }
  }
};
