'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bankcard = sequelize.define('Bankcard', {
    cardnumber: DataTypes.INTEGER,
    money: DataTypes.INTEGER,
    ownerid: DataTypes.INTEGER,
    pincode: DataTypes.INTEGER
  }, {});
  Bankcard.associate = function(models) {
    // associations can be defined here
    Bankcard.belongsTo(models.Char, {
      foreignKey: 'ownerid',
      onDelete: 'CASCADE'
    })
  };
  return Bankcard;
};
