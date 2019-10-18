const accountController = require('../controllers').account;

module.exports = (app) => {
  app.post('/api/account', accountController.get);
};
