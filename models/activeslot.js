'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activeslot = sequelize.define('Activeslot', {
    user: DataTypes.INTEGER,
    items: DataTypes.STRING,
    counts: DataTypes.STRING
  }, {});
  Activeslot.associate = function(models) {
    // associations can be defined here
    Activeslot.belongsTo(models.Char, {
      foreignKey: 'user',
      onDelete: 'CASCADE',
    })
  };
  return Activeslot;
};
