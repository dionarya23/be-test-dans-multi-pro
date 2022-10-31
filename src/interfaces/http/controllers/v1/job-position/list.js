const JobPositionBusiness = require('../../../../../domains/job-position/business');
const JobPositionValidator = require('../../../validator/job-position/list');
const { serialize } = require('../../../serializer/job-position/index');

module.exports = async (req, res, next) => {
  try {
    await JobPositionValidator(req.query);

    const {
      description,
      page,
      location,
      full_time: fullTime,
    } = req.query;

    const jobPositionBusiness = new JobPositionBusiness();
    const {
      data,
    } = await jobPositionBusiness.list({
      description,
      page,
      location,
      fullTime,
    });

    const serializedData = serialize(data);

    res.send(serializedData);
  } catch (error) {
    next(error);
  }
};
