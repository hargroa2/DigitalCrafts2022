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
      "Clients",
      [
        {
          firsName: "John",
          lastName: "Frasier",
          email: "j@j.com",
          pet: "dog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firsName: "Amanda",
          lastName: "Hargrove",
          email: "a@j.com",
          pet: "bearded dragon",
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

    await queryInterface.bulkDelete("Clients", null, {});
  },
};
