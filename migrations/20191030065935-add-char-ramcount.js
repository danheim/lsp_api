module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Chars', 'ramcount', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Chars', 'ramcount'),
  ])
};
