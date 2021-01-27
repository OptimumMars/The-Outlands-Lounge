'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Legends', [
      {
        id: 1,
        UserId: 1,
        Bloodhound: false,
        Gibraltar: false,
        Lifeline: false,
        Pathfinder: true,
        Wraith: false,
        Bangalore: true,
        Caustic: false,
        Mirage: false,
        Octane: false,
        Wattson: false,
        Crypto: true,
        Revenant: true,
        Loba: false,
        Rampart: false,
        Horizon: false,
      },
      {
        id: 2,
        UserId: 2,
        Bloodhound: false,
        Gibraltar: false,
        Lifeline: false,
        Pathfinder: false,
        Wraith: false,
        Bangalore: false,
        Caustic: true,
        Mirage: false,
        Octane: false,
        Wattson: true,
        Crypto: false,
        Revenant: false,
        Loba: true,
        Rampart: false,
        Horizon: false,
      },
      {
        id: 3,
        UserId: 3,
        Bloodhound: false,
        Gibraltar: true,
        Lifeline: true,
        Pathfinder: false,
        Wraith: false,
        Bangalore: false,
        Caustic: false,
        Mirage: false,
        Octane: false,
        Wattson: false,
        Crypto: false,
        Revenant: false,
        Loba: false,
        Rampart: false,
        Horizon: true,
      },
      {
        id: 4,
        UserId: 4,
        Bloodhound: true,
        Gibraltar: false,
        Lifeline: false,
        Pathfinder: true,
        Wraith: true,
        Bangalore: false,
        Caustic: false,
        Mirage: true,
        Octane: false,
        Wattson: false,
        Crypto: false,
        Revenant: false,
        Loba: false,
        Rampart: false,
        Horizon: false,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Legends', null, {});
  }
};
