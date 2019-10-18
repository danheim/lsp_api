const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { ACCESS_TOKEN_HEADER, SECRET_KEY } = require('./constants');

module.exports = {
  Query: {
    getAccount: (root, { id }, { models }) => {
      return models.Account.findByPk(id);
    },
    getChar: (root, { id }, { models }) => {
      return models.Char.findByPk(id);
    },
    signIn: async(root, { name, password }, { models, res }) => {
      const account = await models.Account.findOne({
        where: { name, password: md5(password) }
      });
      const token = await jwt.sign({ account }, SECRET_KEY);

      res.set(ACCESS_TOKEN_HEADER, token);

      return account;
    }
  },
  Account: {
    chars: (parent) => parent.getChars()
  },
  Char: {
    account: (parent) => parent.getAccount()
  }
};