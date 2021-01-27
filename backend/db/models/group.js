'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    GroupName: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
  }, {});
  Group.associate = function (models) {
    // associations can be defined here
    Group.belongsToMany(models.User, {
      through: "GroupMember",
      otherKey: "UserId",
      foreignKey: "GroupId",
      as: "Member",
    });
  };
  return Group;
};
