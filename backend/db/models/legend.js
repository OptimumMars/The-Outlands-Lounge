'use strict';
module.exports = (sequelize, DataTypes) => {
  const Legend = sequelize.define('Legend', {
    Bloodhound: DataTypes.BOOLEAN,
    Gibraltar: DataTypes.BOOLEAN,
    Lifeline: DataTypes.BOOLEAN,
    Pathfinder: DataTypes.BOOLEAN,
    Wraith: DataTypes.BOOLEAN,
    Bangalore: DataTypes.BOOLEAN,
    Caustic: DataTypes.BOOLEAN,
    Mirage: DataTypes.BOOLEAN,
    Octane: DataTypes.BOOLEAN,
    Wattson: DataTypes.BOOLEAN,
    Crypto: DataTypes.BOOLEAN,
    Revenant: DataTypes.BOOLEAN,
    Loba: DataTypes.BOOLEAN,
    Rampart: DataTypes.BOOLEAN,
    Horizon: DataTypes.BOOLEAN
  }, {});
  Legend.associate = function(models) {
    // associations can be defined here
  };
  return Legend;
};