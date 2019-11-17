module.exports = {
  up: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Warns', 'date'),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Warns', 'date', Sequelize.STRING, {
      after: 'reason'
    })
  ])
};
