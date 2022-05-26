"use strict";

function getTimeFromMinutes(time) {
    if (typeof(time) != 'number' || !Number.isInteger(time) || time < 0) {
         console.log('Ошибка, проверьте данные');
    } else {
        let decimal = time / 60;
        let hours = Math.floor(decimal),
            minutes = Math.round(( decimal - Math.floor(decimal) ) * 60);

        if (hours == 1) {
             console.log(`Это ${hours} час и ${minutes} минут`);
        } else if (hours === 0 || hours >= 5) {
             console.log(`Это ${hours} часов и ${minutes} минут`);
        } else {
             console.log(`Это ${hours} часа и ${minutes} минут`);
        }
    }
}
getTimeFromMinutes(100);

function findMaxNumber(a, b, c, d) {
    const arr = [a, b, c, d];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] || typeof(arr[i]) != 'number') {
            return 0;
        }
    }
    return Math.max.apply(null, arr);
}
findMaxNumber(7, 1, 33.3, '10');