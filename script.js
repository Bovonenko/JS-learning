"use strict";

function sayHello(name) {
    return(`Hello ${name}!`);
}
sayHello('Rostyslav');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
returnNeighboringNumbers(3);

function getMathResult(num, times) {
    if (typeof(num) !== 'number' && num <= 0) {
        return num;
    }
    let str = '';

    for (let i = 1; i <= times; i++) {
        str += num * i;
        if (i === times)  {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return str;
}
getMathResult(3, '2');