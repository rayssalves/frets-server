"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "owners",
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("owners", null, {});
  },
};
