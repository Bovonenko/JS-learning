"use strict"; 

//logical operators

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('I am not hungry!');
// } else {
//     console.log('Not enough!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'adsafaf');

// if (hamburger === 3 && cola ===1 && fries) {
//     console.log('Evrn is not hungry!');
// } else {
//     console.log('Not enough!');
// }

// console.log((hamburger && fries));


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;



if (hamburger && cola || fries ===3 && nuggets) {
    console.log('Evrn is happy!');
} else {
    console.log('Not enough!');
}

console.log((hamburger ===3 && cola === 2 || fries ===3 && nuggets));

let johnReport, alexReport, samReport = 'done';

console.log(johnReport || alexReport || samReport);

console.log(!0);


console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);

