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
    return queryInterface.bulkInsert('Groups', [
      {
        id: 1,
        GroupName: 'Casual Wednesday Games',
        Description: "Just some dudes chilling with a few nice games"
      },
      {
        id: 2,
        GroupName: 'Super Comp Mega Team',
        Description: 'We go HARD, and we play to WIN'
      },
      {
        id: 3,
        GroupName: 'Welcome new players!',
        Description: 'I want to help some new players get into the game!'
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
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
