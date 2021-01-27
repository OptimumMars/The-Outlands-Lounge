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
    return queryInterface.bulkInsert('GroupMembers', [
      {
        id: 1,
        UserId: 1,
        GroupId: 1,
        isOwner: false,
      },
      {
        id: 2,
        UserId: 2,
        GroupId: 2,
        isOwner: true,
      },
      {
        id: 3,
        UserId: 3,
        GroupId: 3,
        isOwner: true,
      },
      {
        id: 4,
        UserId: 4,
        GroupId: 1,
        isOwner: true,
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
    return queryInterface.bulkDelete('GroupMembers', null, {});
  }
};
