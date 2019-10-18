const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_HEADER, SECRET_KEY } = require('./constants');

const getToken = req => req.headers[ACCESS_TOKEN_HEADER];
const getUser = (models, req) => {
  const token = getToken(req);

  if (!token) return null;

  let data;
  try {
    data = jwt.verify(token, SECRET_KEY);
  } catch (e) {
    return null;
  }

  return data;
};

module.exports = {
  getUser
};
