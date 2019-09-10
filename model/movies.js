const Movies = (connection, Sequelize) => {
    return connection.define('movies', {
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
            type: Sequelize.INTEGER,
        },
        rating: {
            type: Sequelize.STRING,
        },
        runTime: {
            type: Sequelize.STRING,
        },
        genres: {
            type: Sequelize.INTEGER,
        },
    })
}
module.exports = Movies;