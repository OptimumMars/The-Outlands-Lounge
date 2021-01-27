'use strict';
module.exports = (sequelize, DataTypes) => {
  const InterestTag = sequelize.define('InterestTag', {
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ranked: DataTypes.BOOLEAN,
    Unranked: DataTypes.BOOLEAN,
    Duos: DataTypes.BOOLEAN,
    Competitive: DataTypes.BOOLEAN,
    Casual: DataTypes.BOOLEAN,
    AllPlayStyles: DataTypes.BOOLEAN,
    AggressivePlayStyles: DataTypes.BOOLEAN,
    DefensivePlayStyles: DataTypes.BOOLEAN,
    LoneWolves: DataTypes.BOOLEAN,
    TeamPlayers: DataTypes.BOOLEAN,
    NewPlayers: DataTypes.BOOLEAN,
    ExperiencedPlayers: DataTypes.BOOLEAN,
    MicRequired: DataTypes.BOOLEAN,
    MicOptional: DataTypes.BOOLEAN,
    NoMic: DataTypes.BOOLEAN,
    Mature: DataTypes.BOOLEAN,
    LGBTQFriendly: DataTypes.BOOLEAN,
    DisabilityFriendly: DataTypes.BOOLEAN,
    KeepItPG: DataTypes.BOOLEAN
  }, {});
  InterestTag.associate = function (models) {
    // associations can be defined here
    InterestTag.belongsTo(models.Group, { foreignKey: 'GroupId' });
  };
  return InterestTag;
};
