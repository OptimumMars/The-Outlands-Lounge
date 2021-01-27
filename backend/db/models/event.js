'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    Date: DataTypes.DATE,
  }, {});
  Event.associate = function (models) {
    // associations can be defined here
    Event.belongsTo(models.Group, { foreignKey: 'GroupId' });
    Event.belongsToMany(models.User, {
      through: "Comment",
      otherKey: "UserId",
      foreignKey: "EventId",
      as: "Commenter",
    });
  };
  return Event;
};
