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
      Bloodhound: {
        type: Sequelize.BOOLEAN
      },
      Gibraltar: {
        type: Sequelize.BOOLEAN
      },
      Lifeline: {
        type: Sequelize.BOOLEAN
      },
      Pathfinder: {
        type: Sequelize.BOOLEAN
      },
      Wraith: {
        type: Sequelize.BOOLEAN
      },
      Bangalore: {
        type: Sequelize.BOOLEAN
      },
      Caustic: {
        type: Sequelize.BOOLEAN
      },
      Mirage: {
        type: Sequelize.BOOLEAN
      },
      Octane: {
        type: Sequelize.BOOLEAN
      },
      Wattson: {
        type: Sequelize.BOOLEAN
      },
      Crypto: {
        type: Sequelize.BOOLEAN
      },
      Revenant: {
        type: Sequelize.BOOLEAN
      },
      Loba: {
        type: Sequelize.BOOLEAN
      },
      Rampart: {
        type: Sequelize.BOOLEAN
      },
      Horizon: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Legends');
  }
};