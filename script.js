"use strict"
const numberOfFulms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFulms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};
const a = prompt("Один из фильмов?", ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из фильмов??', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[a] = d;

console.log(personalMovieDB);


    
 