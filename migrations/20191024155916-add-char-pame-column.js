module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Chars', 'pame', {
      type: Sequelize.STRING,
      defaultValue: "-"
    }),
    queryInterface.addColumn('Chars', 'online', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Chars', 'pame'),
    queryInterface.removeColumn('Chars', 'online'),
  ])
};
