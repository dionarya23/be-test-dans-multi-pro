const UserBusiness = require('../../../../../domains/user/business');
const ActiveTimeslotValidator = require('../../../validator/user/login');

module.exports = async (req, res, next) => {
  try {
    await ActiveTimeslotValidator(req.body);

    const { username, password } = req.body;

    const userBusiness = new UserBusiness();
    const {
      token,
    } = await userBusiness.login({
      username,
      password,
    });

    res.send({
      token,
    });
  } catch (error) {
    next(error);
  }
};
