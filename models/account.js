'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    login: DataTypes.STRING,
    token: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    datereg: DataTypes.DATE,
    lastseen: DataTypes.DATE,
  }, {});

  Account.associate = function(models) {
    // associations can be defined here
    Account.hasMany(models.Char, {
      foreignKey: 'account',
    });
    Account.hasMany(models.Candidate, {
      foreignKey: 'account',
    });
  };

  return Account;
};
