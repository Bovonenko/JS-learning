"use strict"; 

//cycles exercises hard

//firstTask
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(arr);


//secondTask
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// console.log(typeof(data[2]));
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'string') {
//         data[i] += ' - done';
//     } else {
//         data[i] = data[i] * 2;
//     }
// }
// console.log(data);


//thirdTask
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
// }

// console.log(result);

const lines = 5;
let result = '';

for (let i = 1; i <= lines; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);