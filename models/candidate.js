'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    account: DataTypes.INTEGER,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    skin: DataTypes.INTEGER,
    sex: DataTypes.INTEGER,
    race: DataTypes.INTEGER,
    national: DataTypes.INTEGER,
    firstsit: DataTypes.STRING,
    secondsit: DataTypes.STRING,
    summary: DataTypes.STRING
  }, {});
  Candidate.associate = function(models) {
    // associations can be defined here
    Candidate.belongsTo(models.Account, {
      foreignKey: 'account',
      onDelete: 'CASCADE'
    });
  };
  return Candidate;
};
