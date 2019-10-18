const Account = require('../models').Account;
const Char = require('../models').Char;

module.exports = {
  get: (req, res) => {
    const { id } = req.body;
    Account.updateAttributes()
    return Account.findByPk(id, {
      include: [
        {
          model: Char,
        }
      ]
    })
    .then(account => res.json(account))
    .catch(error => res.send(error))
  }
};
