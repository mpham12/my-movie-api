'use strict';


module.exports = {


  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('movies', [

      { tittle: '12 Angry Men', director: 'Sidney Lumet', releaseDate: '3/22/1952', rating: 'p', runTime: '150 mins', genres: 'comedy' },
      { tittle: '12 Angry Men', director: 'Sidney Lumet', releaseDate: '3/22/1952', rating: 'p', runTime: '150 mins', genres: 'comedy' },
      { tittle: '2001: A Space Odyssey', director: 'Stanley Kubrick', releaseDate: '3/22/1952', rating: 'pg', runTime: '150mins', genres: 'comedy' },
      { tittle: 'A Clockwork Orange', director: 'Stanley Kubrick', releaseDate: '3/22/1952', rating: 'Passed', runTime: '150mins', genres: 'comedy' },
      { tittle: 'A Night At The Opera', director: 'Sam Wood', releaseDate: '3/22/1952', rating: 'r', runTime: '150mins', genres: 'comedy' },
      { tittle: 'A Streetcar Named Desire', director: 'Joseph L. Mankiewicz', releaseDate: '3/22/1952', rating: 'not rated', runTime: '150mins', genres: 'comedy' },
      { tittle: 'All About Eve', director: 'Elia Kazan', releaseDate: '3/22/1952', rating: 'approve', runTime: '150mins', genres: 'comedy' },
      { tittle: 'All The Presidents Men', director: 'Elia Kazan', releaseDate: '3/22/1952', rating: 'p', runTime: '150mins', genres: 'comedy' }


    ])
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('teams', null, {})

  }
};