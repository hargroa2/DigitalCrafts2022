"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Pets",
      [
        {
          name: "Tiny",
          species: "dog",
          age: 4,
          weight: "140",
          health: "good",
          unitOfWeight: "kilos",
          owner: "Chad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Benji",
          species: "bearded dragon",
          age: 3,
          weight: "2",
          health: "good",
          unitOfWeight: "lbs",
          owner: "Amanda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Camper",
          species: "dog",
          age: 3,
          weight: "80",
          health: "good",
          unitOfWeight: "lbs",
          owner: "Emily",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Midnight",
          species: "cat",
          age: 1,
          weight: "8",
          health: "meh",
          unitOfWeight: "lbs",
          owner: "Lisa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stella",
          species: "cat",
          age: 12,
          weight: "8",
          health: "good",
          unitOfWeight: "lbs",
          owner: "Amanda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
