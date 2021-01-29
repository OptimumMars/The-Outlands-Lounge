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
    return queryInterface.bulkInsert('InterestTags', [
      {
        id: 1,
        GroupId: 1,
        Ranked: false,
        Unranked: true,
        Duos: false,
        Competitive: false,
        Casual: true,
        AllPlayStyles: true,
        AggressivePlayStyles: false,
        DefensivePlayStyles: false,
        LoneWolves: false,
        TeamPlayers: false,
        NewPlayers: false,
        ExperiencedPlayers: false,
        MicRequired: false,
        MicOptional: false,
        NoMic: false,
        Mature: false,
        LGBTQFriendly: true,
        DisabilityFriendly: false,
        KeepItPG: false,
      },
      {
        id: 2,
        GroupId: 2,
        Ranked: true,
        Unranked: false,
        Duos: false,
        Competitive: true,
        Casual: false,
        AllPlayStyles: false,
        AggressivePlayStyles: true,
        DefensivePlayStyles: false,
        LoneWolves: false,
        TeamPlayers: true,
        NewPlayers: false,
        ExperiencedPlayers: true,
        MicRequired: true,
        MicOptional: false,
        NoMic: false,
        Mature: false,
        LGBTQFriendly: false,
        DisabilityFriendly: false,
        KeepItPG: false,
      },
      {
        id: 3,
        GroupId: 3,
        Ranked: false,
        Unranked: true,
        Duos: false,
        Competitive: false,
        Casual: false,
        AllPlayStyles: false,
        AggressivePlayStyles: false,
        DefensivePlayStyles: false,
        LoneWolves: false,
        TeamPlayers: false,
        NewPlayers: true,
        ExperiencedPlayers: false,
        MicRequired: false,
        MicOptional: true,
        NoMic: false,
        Mature: false,
        LGBTQFriendly: true,
        DisabilityFriendly: true,
        KeepItPG: true,
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
    return queryInterface.bulkDelete('InterestTags', null, {});
  }
};
