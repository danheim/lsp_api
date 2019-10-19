'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.INTEGER
      },
      unixcreate: {
        type: Sequelize.INTEGER
      },
      mileage: {
        type: Sequelize.FLOAT
      },
      damage: {
        type: Sequelize.STRING
      },
      health: {
        type: Sequelize.FLOAT
      },
      plate: {
        type: Sequelize.STRING
      },
      ownerid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Chars',
          key: 'id',
          as: 'user'
        }
      },
      faction: {
        type: Sequelize.INTEGER
      },
      cfaction: {
        type: Sequelize.INTEGER
      },
      work: {
        type: Sequelize.INTEGER
      },
      locked: {
        type: Sequelize.INTEGER
      },
      trunklocked: {
        type: Sequelize.INTEGER
      },
      color1: {
        type: Sequelize.INTEGER
      },
      color2: {
        type: Sequelize.INTEGER
      },
      siren: {
        type: Sequelize.INTEGER
      },
      fuel: {
        type: Sequelize.FLOAT
      },
      x: {
        type: Sequelize.FLOAT
      },
      y: {
        type: Sequelize.FLOAT
      },
      z: {
        type: Sequelize.FLOAT
      },
      r: {
        type: Sequelize.FLOAT
      },
      vw: {
        type: Sequelize.INTEGER
      },
      interior: {
        type: Sequelize.INTEGER
      },
      su: {
        type: Sequelize.INTEGER
      },
      sureason: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vehicles');
  }
};
