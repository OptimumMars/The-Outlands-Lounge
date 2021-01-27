'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Legends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      Bloodhound: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Gibraltar: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Lifeline: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Pathfinder: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Wraith: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Bangalore: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Caustic: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Mirage: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Octane: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Wattson: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Crypto: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Revenant: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Loba: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Rampart: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Horizon: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    return queryInterface.dropTable('Legends');
  }
};
