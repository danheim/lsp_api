'use strict';
module.exports = (sequelize, DataTypes) => {
  const Char = sequelize.define('Char', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    loginw: DataTypes.STRING,
    premium: DataTypes.INTEGER,
    premiumunix: DataTypes.INTEGER,
    settings: DataTypes.STRING,
    salarybank: DataTypes.INTEGER,
    uberinfo: DataTypes.STRING,
    uberban: DataTypes.INTEGER,
    uberbanreason: DataTypes.STRING,
    houselog: DataTypes.STRING,
    resmoney: DataTypes.INTEGER,
    unixpermit: DataTypes.INTEGER,
    number: DataTypes.STRING,
    paydaytime: DataTypes.INTEGER,
    vehlicense: DataTypes.INTEGER,
    vehunixlicstop: DataTypes.INTEGER,
    vehlicunix: DataTypes.INTEGER,
    leader: DataTypes.INTEGER,
    cleader: DataTypes.INTEGER,
    faction: DataTypes.INTEGER,
    cfaction: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
    bankmoney: DataTypes.INTEGER,
    sex: DataTypes.INTEGER,
    race: DataTypes.INTEGER,
    x: DataTypes.FLOAT,
    y: DataTypes.FLOAT,
    z: DataTypes.FLOAT,
    r: DataTypes.FLOAT,
    vw: DataTypes.INTEGER,
    interrior: DataTypes.INTEGER,
    spawn: DataTypes.INTEGER,
    lastip: DataTypes.STRING,
    health: DataTypes.FLOAT,
    dead: DataTypes.INTEGER,
    muted: DataTypes.INTEGER,
    salarytime: DataTypes.INTEGER,
    channel: DataTypes.INTEGER,
    slot: DataTypes.INTEGER,
    admact: DataTypes.INTEGER,
    fc: DataTypes.INTEGER,
    chatanim: DataTypes.INTEGER,
    su: DataTypes.INTEGER,
    sureason: DataTypes.STRING,
    warning: DataTypes.STRING,
    warningreason: DataTypes.STRING,
    unixwarning: DataTypes.STRING,
    ticket: DataTypes.STRING,
    ticketreason: DataTypes.STRING,
    unixticket: DataTypes.STRING,
    flymode: DataTypes.INTEGER,
    pblacklist: DataTypes.STRING,
    jailtime: DataTypes.INTEGER,
    mutetime: DataTypes.INTEGER,
    ramcount: DataTypes.INTEGER,
    robcount: DataTypes.INTEGER,
  }, {});
  Char.associate = function(models) {
    // associations can be defined here
    Char.belongsTo(models.Account, {
      foreignKey: 'account',
      onDelete: 'CASCADE',
    });
    Char.hasOne(models.Activeslot, {
      foreignKey: 'user',
    });
    Char.hasMany(models.Vehicle, {
      foreignKey: 'ownerid',
    });
    Char.hasOne(models.Bankcard, {
      foreignKey: 'ownerid',
    });
    Char.hasOne(models.Charinv, {
      foreignKey: 'user',
    });
    Char.hasMany(models.Enterlog, {
      foreignKey: 'user',
    });
  };
  return Char;
};
