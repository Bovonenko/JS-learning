"use strict";

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showListOfFilms(arr) {
    return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

console.log(showListOfFilms(films));
// films[0].id = 1;
// console.log(Object.keys(films[0]).some(item => item === 'id'));


function showGoodFilms(arr) {
    const goodFilms = arr.filter(film => film.rating >= 8);
    console.log(goodFilms);
}
// showGoodFilms(films);

function showListOfFilms(arr) {
    const filmList = arr.map(film => film.name);
    console.log(filmList.join(', '));
}
// showListOfFilms(films);

function setFilmsIds(arr) {
    // let filmsId = [...arr];
    // filmsId.forEach((item, i) => {
    //     item.id = i;
    // });
    // console.log(filmsId);
    // return filmsId;
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
    
}
setFilmsIds(films);

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    
    // const checkEveryFilm = function () {
    //     let newArr = [];
    //     arr.forEach((film, i) => {
    //         newArr[i] = Object.keys(film).some(key => key === 'id');          
    //     });
    //     return newArr;
    // };
    
    // return checkEveryFilm().every(i => i === true);

    return arr.every(film => film.id || film.id === 0);
}
checkFilms(films);

