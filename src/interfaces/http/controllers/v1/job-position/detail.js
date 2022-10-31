const JobPositionBusiness = require('../../../../../domains/job-position/business');
const JobPositionValidator = require('../../../validator/job-position/detail');
const { serialize } = require('../../../serializer/job-position/index');

module.exports = async (req, res, next) => {
  try {
    await JobPositionValidator(req.params);

    const { id } = req.params;

    const jobPositionBusiness = new JobPositionBusiness();
    const {
      data,
    } = await jobPositionBusiness.detail({
      id,
    });

    const serializedData = serialize(data);

    res.send(serializedData);
  } catch (error) {
    next(error);
  }
};
