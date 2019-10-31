module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Chars', 'jailtime', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }),
    queryInterface.addColumn('Chars', 'mutetime', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Chars', 'jailtime'),
    queryInterface.removeColumn('Chars', 'mutetime'),
  ])
};
