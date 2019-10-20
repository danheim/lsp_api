'use strict';
module.exports = (sequelize, DataTypes) => {
  const Charinv = sequelize.define('Charinv', {
    user: DataTypes.INTEGER,
    items: DataTypes.STRING,
    counts: DataTypes.STRING
  }, {});
  Charinv.associate = function(models) {
    // associations can be defined here
    Charinv.belongsTo(models.Char, {
      foreignKey: 'user',
      onDelete: 'CASCADE'
    });
  };
  return Charinv;
};
