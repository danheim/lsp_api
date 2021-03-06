const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_HEADER, SECRET_KEY } = require('./constants');

const getToken = req => req.headers[ACCESS_TOKEN_HEADER];
const getUser = async (models, req, res) => {
  const token = getToken(req);
  if (!token) {
    return null;
  }

  let account;
  try {
    account = jwt.verify(token, SECRET_KEY).account;
  } catch (e) {
    return null;
  }

  const user = await models.Account.findByPk(account.id);
  if (!user) {
    res.removeHeader(ACCESS_TOKEN_HEADER);
    return null;
  }
  return user.dataValues;
};

module.exports = {
  getUser
};
