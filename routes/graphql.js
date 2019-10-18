const Account = require('../models').Account;

module.exports = {
  hello: async({ name }) => {
    // const account = await Account.findByPk(id);
    return {
      name: "Dima"
    };
  },
};
