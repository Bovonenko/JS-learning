"use strict";

function sayHello(name) {
    return(`Hello ${name}!`);
}
sayHello('Rostyslav');

function returnNeighboringNumbers(num) {
    const arr = [num - 1, num, num + 1];
    console.log(arr);
}
returnNeighboringNumbers(3);

function getMathResult(base, progression) {
    let result = '';
    if (progression > 0 && typeof(progression) != 'string') {
        for (let i = 1; i <= progression; i++) {
            result += base * i;
            if (i === progression)  {
                continue;
            } else {
                result += '---';
            }
        }
    } else {
        result = base;
        return(result);
    }
    return(result);
}
getMathResult(3, '2');