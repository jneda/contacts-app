"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Contacts",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@anywhere.org",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          firstName: "Anthony",
          lastName: "Houlala",
          email: "toto@youpi.fr",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@nwo.ru",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contacts", null, {});
  },
};
