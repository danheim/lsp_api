'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Warns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      character: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Chars',
          key: 'id',
          // as: 'character',
        }
      },
      admin: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Admins',
          key: 'id',
          // as: 'admin',
        }
      },
      reason: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Warns');
  }
};
