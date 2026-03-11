'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('football_Teams', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      teamName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      coachName: {
        type: Sequelize.STRING,
        allowNull:false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('football_Teams');
  }
};