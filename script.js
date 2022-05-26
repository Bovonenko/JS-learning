"use strict";

function getTimeFromMinutes(minutesTotal) {
    // if (typeof(time) != 'number' || !Number.isInteger(time) || time < 0) {
    //      console.log('Ошибка, проверьте данные');
    // } else {
    //     let decimal = time / 60;
    //     let hours = Math.floor(decimal),
    //         minutes = Math.round(( decimal - Math.floor(decimal) ) * 60);

    //     if (hours == 1) {
    //          console.log(`Это ${hours} час и ${minutes} минут`);
    //     } else if (hours === 0 || hours >= 5) {
    //          console.log(`Это ${hours} часов и ${minutes} минут`);
    //     } else {
    //          console.log(`Это ${hours} часа и ${minutes} минут`);
    //     }
    // }

if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
getTimeFromMinutes(100);

function findMaxNumber(a, b, c, d) {
    // const arr = [a, b, c, d];
    // for (let i = 0; i < arr.length; i++) {
    //     if (!arr[i] || typeof(arr[i]) != 'number') {
    //         return 0;
    //     }
    // }
    // return Math.max.apply(null, arr);
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}
findMaxNumber(7, 1, 33.3, '10');

console.log(150 % 60);