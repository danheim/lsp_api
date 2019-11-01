module.exports = {
  up: (queryInterface) => Promise.all([
    queryInterface.renameColumn('Accounts', 'name', 'login'),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.renameColumn('Accounts', 'login', 'name'),
  ])
};
