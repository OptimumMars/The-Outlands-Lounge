'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('InterestTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      GroupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Groups' }
      },
      Ranked: {
        type: Sequelize.BOOLEAN
      },
      Unranked: {
        type: Sequelize.BOOLEAN
      },
      Duos: {
        type: Sequelize.BOOLEAN
      },
      Competitive: {
        type: Sequelize.BOOLEAN
      },
      Casual: {
        type: Sequelize.BOOLEAN
      },
      AllPlayStyles: {
        type: Sequelize.BOOLEAN
      },
      AggressivePlayStyles: {
        type: Sequelize.BOOLEAN
      },
      DefensivePlayStyles: {
        type: Sequelize.BOOLEAN
      },
      LoneWolves: {
        type: Sequelize.BOOLEAN
      },
      TeamPlayers: {
        type: Sequelize.BOOLEAN
      },
      NewPlayers: {
        type: Sequelize.BOOLEAN
      },
      ExperiencedPlayers: {
        type: Sequelize.BOOLEAN
      },
      MicRequired: {
        type: Sequelize.BOOLEAN
      },
      MicOptional: {
        type: Sequelize.BOOLEAN
      },
      NoMic: {
        type: Sequelize.BOOLEAN
      },
      Mature: {
        type: Sequelize.BOOLEAN
      },
      LGBTQFriendly: {
        type: Sequelize.BOOLEAN
      },
      DisabilityFriendly: {
        type: Sequelize.BOOLEAN
      },
      KeepItPG: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('InterestTags');
  }
};
