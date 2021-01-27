'use strict';
module.exports = (sequelize, DataTypes) => {
  const Legend = sequelize.define('Legend', {
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    Bloodhound: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Gibraltar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Lifeline: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Pathfinder: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Wraith: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Bangalore: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Caustic: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Mirage: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Octane: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Wattson: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Crypto: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Revenant: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Loba: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Rampart: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Horizon: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {});
  Legend.associate = function (models) {
    // associations can be defined here
    Legend.belongsTo(models.User, { foreignKey: 'UserId' });
  };
  return Legend;
};
