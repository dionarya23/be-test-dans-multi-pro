const bcrypt = require('bcrypt');

const checkPassword = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);

  return isMatch;
};

module.exports = {
  checkPassword,
};
