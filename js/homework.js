"use strict";

//let numberOfFilms;
//
//function start () {
//    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//
//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//    }
//}
//
//start();
//
//var personalMovieDB = {
//        count: numberOfFilms,
//        movies: {},
//        actors: {},
//        genres: [],
//        privat: false
//};
//
//console.log(personalMovieDB.count);
//
//function showMyDB (hidden) {
//    if (!hidden) {
//        console.log(personalMovieDB);
//    }
//}
//
//showMyDB(personalMovieDB.privat);
//
//function writeYourGenres () {
//    for (var i = 0; i < 3; i += 1) {
//        var genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
//        personalMovieDB.genres[i] = genre;
//    }
//    console.log(personalMovieDB.genres);
//}
//
//writeYourGenres();
//
//function rememberMyFilms () {
//    for (var i = 0; i < 2; i += 1) {
//        var nameOfFilm = prompt('Один из последних просмотренных фильмов?', '');
//        var scoreOfFilm = prompt('Насколько вы его оцениваете?', '');
//    
//        if (nameOfFilm !== null && nameOfFilm !== null && nameOfFilm !== '' &&
//        nameOfFilm.length < 50 && nameOfFilm !== '') {
//            personalMovieDB.movies[nameOfFilm] = scoreOfFilm;
//        } else {
//            i--;
//        }
//    }
//}
//
//rememberMyFilms();
//
//function detectPersonalLevel () {
//    if (personalMovieDB.count <= 10 && personalMovieDB.count !== 0 &&
//        personalMovieDB.count !== null) {
//        console.log('Просмотрено довольно мало фильмов');
//    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//        console.log('Вы классический зритель');
//    } else if (personalMovieDB.count > 30) {
//        console.log('Вы киноман');
//    } else {
//        console.log('Произошла ошибка');
//    }
//}
//
//detectPersonalLevel();