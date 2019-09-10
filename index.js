let express = require('express');
let bodyParser = require('body-parser');
let movies = require('./movies.json');
let model = require('./model');
let Sequelize = require('sequelize');


let app = express();
let port = 1337;
let Op = Sequelize.Op;



app.get('/movies', (request, response) => {
    model.Movies.findAll({
        attributes: ['id', 'tittle', 'rating', 'director', 'runTime', 'releaseDate', 'genres']

    }).then((movies) => {
        response.send(movies)
    })
});
app.get('/movies/:id', (request, response) => {
    model.Movies.findAll({
        where: {
            [Op.or]: [{
                id: request.params.id
            }]
        }
    }).then((movies) => {
        response.send(movies)
    })

});
app.get('/movies/director/:director', (request, response) => {
    model.Movies.findAll({
        where: {
            [Op.or]: [{
                director: request.params.director
            }]
        }
    }).then((movies) => {
        response.send(movies)
    })

});
app.get('/movies/genres/:genres', (request, response) => {
    model.Movies.findAll({
        where: {
            [Op.or]: [{
                genres: request.params.genres
            }]
        }
    }).then((movies) => {
        response.send(movies)
    })

});
app.use(bodyParser.json())
app.post('/movies', (request, response) => {

    //getting value for movies
    var {
        id, tittle, rating, director, runTime, releaseDate
    } = request.body;

    if (!id || !tittle || !rating || !director || !runTime || !releaseDate) {
        response.status(400).send('The following attributes are require:id, author, score, director, runtime, releaseDate')
    } else {
        model.Movies.create({
            id, tittle, rating, director, runTime, releaseDate
        }).then((newMovies) => {
            response.sendStatus(200).send(newMovies)
        })
    }

});


app.all('*', (request, response) => {

});

app.listen(port, () => {
    console.log(`movies server running on port ` + port)
})
module.exports = app
