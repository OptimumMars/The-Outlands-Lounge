'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EventId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
  };
  return Comment;
};
