const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { UserInputError } = require('apollo-server');

const { SECRET_KEY, LOGIN_EXIST, EMAIL_EXIST } = require('./constants');

module.exports = {
  Query: {
    authUser: (root, args, { models, user }) => models.Account.findByPk(user.id),
    getChar: (root, { id }, { models }) => models.Char.findByPk(id),
    getQuestions: async (root, args, { models }) => {
      const questions = await models.Question.findAll();
      return questions.sort(() => Math.random() - 0.5);
    },
  },
  Mutation: {
    signIn: async (root, args, { models }) => {
      const { login, password } = args;
      const where = { login, password: md5(password) };
      const account = await models.Account.findOne({ where });
      if (!account) return null;

      const token = await jwt.sign({ account }, SECRET_KEY, { expiresIn: '1h' });
      if (!token) return null;

      account.token = token;
      return account;
    },
    signUp: async (root, args, { models }) => {
      const { login, email, name, password } = args;
      console.log(args);
      let account = null;

      account = await models.Account.findOne({
        where: { login }
      });

      if (account) {
        throw new UserInputError(LOGIN_EXIST);
      }

      account = await models.Account.findOne({
        where: { email }
      });

      if (account) {
        throw new UserInputError(EMAIL_EXIST);
      }

      account = await models.Account.create({
        login,
        email,
        name,
        password: md5(password)
      })

      const token = await jwt.sign({ account }, SECRET_KEY, { expiresIn: '1h' });
      if (!token) return null;

      account.token = token;
      return account;
    }
  },
  Account: {
    chars: (parent) => parent.getChars(),
    candidates: (parent) => parent.getCandidates(),
    admin: (parent) => parent.getAdmin(),
  },
  Char: {
    account: (parent) => parent.getAccount(),
    activeslot: (parent) => parent.getActiveslot(),
    vehicles: (parent) => parent.getVehicles(),
    bankcard: (parent) => parent.getBankcard(),
    charinv: (parent) => parent.getCharinv(),
    enterlogs: (parent) => parent.getEnterlogs(),
    warns: (parent) => parent.getWarns(),
  },
  Question: {
    answers: (parent) => parent.getAnswers(),
  }
};
