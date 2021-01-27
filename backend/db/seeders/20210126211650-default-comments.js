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
    return queryInterface.bulkInsert('Comments', [
      {
        id: 1,
        UserId: 1,
        EventId: 1,
        Content: "I can't wait for this"
      },
      {
        id: 2,
        UserId: 2,
        EventId: 2,
        Content: "We're gonna get so many dubs"
      },
      {
        id: 3,
        UserId: 3,
        EventId: 3,
        Content: "I'll play my best"
      },
      {
        id: 4,
        UserId: 4,
        EventId: 1,
        Content: "We're going to have a good time"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
