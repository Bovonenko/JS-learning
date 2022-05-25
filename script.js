"use strict"; 

//cycles exercises

for (let i = 5; i < 11; i++) {
    console.log(i);
}

// let num = 5;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 11);

// while (num < 11) {
//     console.log(num);
//     num++;
// }

for (let i = 20; i > 9; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

// secondTask

// console.log(3 % 2);
// console.log(0 % 2);
for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// thirdTask
for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }


// fourthTask   
let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

// fifthTask
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);