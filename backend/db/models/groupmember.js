'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupMember = sequelize.define('GroupMember', {
    UserId: DataTypes.INTEGER,
    GroupId: DataTypes.INTEGER
  }, {});
  GroupMember.associate = function(models) {
    // associations can be defined here
  };
  return GroupMember;
};