module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Chars', 'robcount', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Chars', 'robcount'),
  ])
};
