module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Chars', 'arrestinfo', Sequelize.STRING
  ),

  down: (queryInterface) => queryInterface.removeColumn(
    'Chars', 'arrestinfo'
  )
};
