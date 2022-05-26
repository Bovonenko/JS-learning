"use strict"; 

//cycles exercises in filmApp

const numberOfFilms =  prompt('Сколько фильмов вы уже посмотрели?'),
    personalMovieDB = {
        'count': numberOfFilms,
        'movies': {},
        'actors': {},
        'genres': [],
        'privat': false
    };

let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', '');

          if (a != '' && a != null && a.length < 50) {
            const b = prompt('На сколько оцените его?', '');
            if (b != null && b != '') {
                personalMovieDB.movies[a] = b;
            }
          } else {
              i--;
          }
    i++;
}


console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}