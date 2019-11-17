'use strict';
module.exports = (sequelize, DataTypes) => {
  const Warn = sequelize.define('Warn', {
    character: DataTypes.INTEGER,
    admin: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  Warn.associate = function(models) {
    // associations can be defined here
    Warn.belongsTo(models.Char, {
      foreignKey: 'character'
    });
    Warn.belongsTo(models.Admin, {
      foreignKey: 'admin'
    });
  };
  return Warn;
};
