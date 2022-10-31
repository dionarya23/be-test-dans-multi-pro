const Dao = require('./dao');
const { myLogger } = require('../../helpers/logger');

const filePath = 'src/domains/job-positions/business';

module.exports = class {
  constructor() {
    this.dao = new Dao();
  }

  async list({
    description,
    page,
    location,
    fullTime,
  }) {
    try {
      const { data } = await this.dao.getJobPositionList({
        description,
        page: parseInt(page, 10),
        location,
        fullTime,
      });

      return {
        data,
      };
    } catch (error) {
      myLogger.error(`${filePath}/list`, error?.message || error);

      throw error;
    }
  }

  async detail({
    id,
  }) {
    try {
      const data = await this.dao.jobPositionById({
        id,
      });

      if (!data) {
        throw new Error('Job not found');
      }

      return {
        data,
      };
    } catch (error) {
      myLogger.error(`${filePath}/detail`, error?.message || error);

      throw error;
    }
  }
};
