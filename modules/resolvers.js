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
      const where = { name, password: md5(password) };
      const account = await models.Account.findOne({ where });
      if (!account) return null;

      const token = await jwt.sign({ account }, SECRET_KEY);
      if (!token) return null;

      res.set(ACCESS_TOKEN_HEADER, token);
      return account;
    }
  },
  Account: {
    chars: (parent) => parent.getChars(),
    candidates: (parent) => parent.getCandidates(),
  },
  Char: {
    account: (parent) => parent.getAccount(),
    activeslot: (parent) => parent.getActiveslot(),
    vehicles: (parent) => parent.getVehicles(),
    bankcard: (parent) => parent.getBankcard(),
    charinv: (parent) => parent.getCharinv(),
    enterlogs: (parent) => parent.getEnterlogs()
  },
};
