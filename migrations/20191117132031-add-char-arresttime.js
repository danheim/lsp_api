module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('Chars', 'arresttime', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }),

  down: queryInterface =>
    queryInterface.removeColumn('Chars', 'arresttime')
};
