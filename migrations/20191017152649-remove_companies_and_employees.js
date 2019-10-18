'use strict';

module.exports = {
  up: (queryInterface) => Promise.all([
    queryInterface.dropTable('Companies'),
    queryInterface.dropTable('Employees'),
  ]),
  down: () => {}
};
