'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('movies');

      await queryInterface.createTable('movies', {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          tittle: {
              type: Sequelize.STRING,
          },
          director: {
              type: Sequelize.STRING,
          },
          releaseDate: {
              type: Sequelize.STRING,
          },
          rating: {
              type: Sequelize.STRING,
          },
          runTime: {
              type: Sequelize.STRING,
          },
          genres: {
            type: Sequelize.STRING,
        },
          createdAt: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updatedAt: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
          },
          deletedAt: {
              type: Sequelize.DATE
          },
      })
  },

  down: async (queryInterface, Sequelize) => {

      return queryInterface.dropTable('movies')
  }
};