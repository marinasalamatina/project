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

if (nameOfFilm1 == '' || nameOfFilm1.length > 50) {
    console.log(nameOfFilm1.length);
    var nameOfFilm1 = prompt('One of the most recently viewed movies?', '');
}

if (scoreOfFilm1 == '') {
    var scoreOfFilm1 = prompt('How much do you rate it?', '');
}

if (nameOfFilm2 == '' || nameOfFilm2.length > 50) {
    var nameOfFilm2 = prompt('One of the most recently viewed movies?', '');
}

if (scoreOfFilm2 == '') {
    var scoreOfFilm2 = prompt('How much do you rate it?', '');
}

if (personalMovieDB.count <= 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (10 > personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

personalMovieDB.movies[nameOfFilm1] = scoreOfFilm1;
personalMovieDB.movies[nameOfFilm2] = scoreOfFilm2;

console.log(personalMovieDB.movies);

//if (0) {
//  console.log('Ok');
//} else {
//    console.log('Error'); 
//}

//const num = +'49';

//if (num < 49 ) {
//    console.log('Error');  
//} else if (num > 100) {
//    console.log('So much'); 
//} else {
//    console.log('Ok!'); 
//}

//тернарный оператор

//(num === 50) ? console.log('Ok!') : console.log('Error');

//switch (num) {
//    case 49:
//        console.log('Error');
//        break;
//    case 100:
//        console.log('Error');
//        break;
//    case 50:
//        console.log('Ok');
//        break;
//    default:
//        console.log('No? no...');
//        break;
//            
//}

//var num = 50;

//while (num <= 55) {
//    console.log(num);
//    num++;
//}

//do {
//    console.log(num);
//    num++;
//}
//while (num <= 56);


//++ -- это инктрименты
//for (let i = 1; i < 10; i++) {
//    if (i === 6) {
//        //break;
//        continue;
//    }
//    console.log(i);
//}