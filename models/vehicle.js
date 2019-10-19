'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    model: DataTypes.INTEGER,
    unixcreate: DataTypes.INTEGER,
    mileage: DataTypes.FLOAT,
    damage: DataTypes.STRING,
    health: DataTypes.FLOAT,
    plate: DataTypes.STRING,
    ownerid: DataTypes.INTEGER,
    faction: DataTypes.INTEGER,
    cfaction: DataTypes.INTEGER,
    work: DataTypes.INTEGER,
    locked: DataTypes.INTEGER,
    trunklocked: DataTypes.INTEGER,
    color1: DataTypes.INTEGER,
    color2: DataTypes.INTEGER,
    siren: DataTypes.INTEGER,
    fuel: DataTypes.FLOAT,
    x: DataTypes.FLOAT,
    y: DataTypes.FLOAT,
    r: DataTypes.FLOAT,
    z: DataTypes.FLOAT,
    vw: DataTypes.INTEGER,
    interior: DataTypes.INTEGER,
    su: DataTypes.INTEGER,
    sureason: DataTypes.STRING,
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
    Vehicle.belongsTo(models.Char, {
      foreignKey: 'ownerid',
      onDelete: 'CASCADE',
    })
  };
  return Vehicle;
};
