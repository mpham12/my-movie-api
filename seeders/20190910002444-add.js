'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      { tittle: 'Man', director: 'Elia Kazan', releaseDate: '3/22/1952', rating: 'p', runTime: '150mins', genres: 'scary' }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
