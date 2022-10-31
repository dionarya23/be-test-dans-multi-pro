const {
  JobPosition,
  sequelize,
} = require('../../drivers/sequelize/models');

const { myLogger } = require('../../helpers/logger');

const typeJob = require('../../definitions/type.job');

const filePath = 'src/domains/job-position/dao';

module.exports = class {
  constructor() {
    this.job_position = JobPosition;
    this.sequelize = sequelize;
  }

  async getJobPositionList({
    description,
    page,
    location,
    fullTime,
  }) {
    try {
      let query = 'SELECT * FROM job_positions WHERE deleted_at IS NULL';
      const replacements = [];

      if (description) {
        query += ' AND description LIKE ?';
        replacements.push(`%${description}%`);
      }

      if (location) {
        query += ' AND location LIKE ?';
        replacements.push(`%${location}%`);
      }

      if (fullTime) {
        query += ' AND type = ?';
        replacements.push(typeJob.FULL_TIME);
      }

      const offset = (page - 1) * 10;
      query += ' LIMIT 10 OFFSET ?';
      replacements.push(offset);

      const jobPositions = await sequelize.query(query, {
        model: this.job_position,
        mapToModel: true,
        replacements,
      });

      return {
        data: jobPositions,
      };
    } catch (error) {
      myLogger.error(`${filePath}/getJobPositionList`, error?.message || error);

      throw error;
    }
  }

  async jobPositionById({ id }) {
    try {
      const jobPosition = await this.job_position.findByPk(id);

      return jobPosition;
    } catch (error) {
      myLogger.error(`${filePath}/jobPositionById`, error?.message || error);

      throw error;
    }
  }
};
