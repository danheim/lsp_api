'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Accounts', 'name', {
    type: Sequelize.STRING,
    allowNull: true
  }),

  down: queryInterface => queryInterface.removeColumn('Accounts', 'name'),
};
