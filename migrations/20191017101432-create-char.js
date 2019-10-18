'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: Sequelize.STRING,
      password: Sequelize.STRING,
      loginw: Sequelize.STRING,
      premium: Sequelize.INTEGER,
      premiumunix: Sequelize.INTEGER,
      settings: Sequelize.STRING,
      salarybank: Sequelize.INTEGER,
      uberinfo: Sequelize.STRING,
      uberban: Sequelize.INTEGER,
      uberbanreason: Sequelize.STRING,
      houselog: Sequelize.STRING,
      resmoney: Sequelize.INTEGER,
      unixpermit: Sequelize.INTEGER,
      number: Sequelize.STRING,
      paydaytime: Sequelize.INTEGER,
      vehlicense: Sequelize.INTEGER,
      vehunixlicstop: Sequelize.INTEGER,
      vehlicunix: Sequelize.INTEGER,
      leader: Sequelize.INTEGER,
      cleader: Sequelize.INTEGER,
      faction: Sequelize.INTEGER,
      cfaction: Sequelize.INTEGER,
      cash: Sequelize.INTEGER,
      bankmoney: Sequelize.INTEGER,
      sex: Sequelize.INTEGER,
      race: Sequelize.INTEGER,
      x: Sequelize.FLOAT,
      y: Sequelize.FLOAT,
      z: Sequelize.FLOAT,
      r: Sequelize.FLOAT,
      vw: Sequelize.INTEGER,
      interrior: Sequelize.INTEGER,
      spawn: Sequelize.INTEGER,
      lastip: Sequelize.STRING,
      health: Sequelize.FLOAT,
      dead: Sequelize.INTEGER,
      muted: Sequelize.INTEGER,
      salarytime: Sequelize.INTEGER,
      channel: Sequelize.INTEGER,
      slot: Sequelize.INTEGER,
      admact: Sequelize.INTEGER,
      fc: Sequelize.INTEGER,
      chatanim: Sequelize.INTEGER,
      su: Sequelize.INTEGER,
      sureason: Sequelize.STRING,
      warning: Sequelize.STRING,
      warningreason: Sequelize.STRING,
      unixwarning: Sequelize.STRING,
      ticket: Sequelize.STRING,
      ticketreason: Sequelize.STRING,
      unixticket: Sequelize.STRING,
      flymode: Sequelize.INTEGER,
      pblacklist: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      account: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Accounts',
          key: 'id',
          as: 'account',
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('chars');
  }
};
