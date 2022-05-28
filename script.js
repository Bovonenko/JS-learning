"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const arra = [];

function showFamily(arr) {
    let str = '';
    if (arr.length === 0) {
        console.log('Семья пуста');
    }
    arr.forEach(function(name) {
        str += `${name} `;
    });
    console.log(`Семья состоит из: ${str}`);
}
showFamily(arra);

const cities = ['Lisbon', 'Rome', 'Milan', 'Dublin'];
function standardizeStrings(arr) {
    let str = '';
    arr.forEach(function(city) {
        console.log(city.toLowerCase());
    });
}
standardizeStrings(cities);




// console.log(arr.length);
