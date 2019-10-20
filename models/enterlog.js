'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enterlog = sequelize.define('Enterlog', {
    user: DataTypes.INTEGER,
    ip: DataTypes.STRING,
    type: DataTypes.INTEGER,
    date: DataTypes.STRING
  }, {});
  Enterlog.associate = function(models) {
    // associations can be defined here
    Enterlog.belongsTo(models.Char, {
      foreignKey: 'user',
      onDelete: 'CASCADE'
    })
  };
  return Enterlog;
};
