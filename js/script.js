"use strict";

var numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);

var personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

var nameOfFilm1 = prompt('One of the most recently viewed movies?', '');
var scoreOfFilm1 = prompt('How much do you rate it?', '');
var nameOfFilm2 = prompt('One of the most recently viewed movies?', '');
var scoreOfFilm2 = prompt('How much do you rate it?', '');

personalMovieDB.movies[nameOfFilm1] = scoreOfFilm1;
personalMovieDB.movies[nameOfFilm2] = scoreOfFilm2;

console.log(personalMovieDB.movies);