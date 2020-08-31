"use strict";

//var personalMovieDB = {
//        count: 0,
//        movies: {},
//        actors: {},
//        genres: [],
//        privat: false,
//        start: function () {
//            this.count = prompt('Сколько фильмов вы уже посмотрели?', '');
//        
//            while (this.count == '' || this.count == null || isNaN(this.count)) {
//                this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//            }
//        },
//        showMyDB: function (hidden) {
//            if (!hidden) {
//                console.log(personalMovieDB);
//            }
//            this.toggleVisibleMyDB();
//        },
//        writeYourGenres: function () {
//            //for (var i = 0; i < 3; i += 1) {
//            //    var genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
//            //    if (genre !== null && genre !== '') {
//            //        this.genres[i] = genre;
//            //    } else {
//            //        i--;
//            //        console.log('Ответь на вопрос!');
//            //    }
//            //}
//
//            for (var i = 0; i < 1; i += 1) {
//                let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
//                if (genres === null || genres === '') {
//                    i--;
//                    console.log('Ответь на вопрос!');
//                } else {
//                    this.genres = genres.split(',');
//                    this.genres.sort();
//                }
//            }
//            console.log(this.genres);
//            this.genres.forEach((element, i) => {
//                console.log(`Любимый жанр: ${(i+1)} = это ${element}`);
//            });
//        },
//        rememberMyFilms: function () {
//            for (var i = 0; i < 2; i += 1) {
//                var nameOfFilm = prompt('Один из последних просмотренных фильмов?', '');
//                var scoreOfFilm = prompt('Насколько вы его оцениваете?', '');
//            
//                if (nameOfFilm !== null && nameOfFilm !== '' &&
//                nameOfFilm.length < 50 && nameOfFilm !== '') {
//                    this.movies[nameOfFilm] = scoreOfFilm;
//                } else {
//                    i--;
//                }
//            }
//        },
//        detectPersonalLevel: function () {
//            if (this.count <= 10 && this.count !== 0 &&
//                this.count !== null) {
//                console.log('Просмотрено довольно мало фильмов');
//            } else if (this.count > 10 && this.count <= 30) {
//                console.log('Вы классический зритель');
//            } else if (this.count > 30) {
//                console.log('Вы киноман');
//            } else {
//                console.log('Произошла ошибка');
//            }
//        },
//        toggleVisibleMyDB: function () {
//            console.log('Пока: ' + this.privat, 'ПРОВЕРКА ОБЩАЯ');
//            if (!this.privat) {
//                this.privat = true;
//            } else {
//                this.privat = false;
//            }
//        }
//};
//
//console.log(personalMovieDB.count);
//
//personalMovieDB.start();
//personalMovieDB.showMyDB(personalMovieDB.privat);
//personalMovieDB.writeYourGenres();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
//
//console.log('А сейчас: ' + personalMovieDB.privat);