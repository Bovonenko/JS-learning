"use strict"; 

//first console app

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
    personalMovieDB = {
        'count': numberOfFilms,
        'movies': {},
        'actors': {},
        'genres': [],
        'privat': false
    },
    lastWatchedFilm = prompt('Один из последних просмотренных фильмов?'),
    rateOfLastWatchedFilm = prompt('На сколько оцените его?');

    personalMovieDB['movies'] = `${lastWatchedFilm}: ${rateOfLastWatchedFilm}`;
  
    console.log(personalMovieDB);


