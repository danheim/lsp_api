'use strict';

module.exports = {
  up: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Accounts', 'datereg'),
    queryInterface.removeColumn('Accounts', 'characters')
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Accounts', 'datereg', Sequelize.DATETIME),
    queryInterface.addColumn('Accounts', 'characters', Sequelize.STRING)
  ])
}
