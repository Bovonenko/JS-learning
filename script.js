"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    let reverseStr = '';

    if (typeof(str) !== 'string') {
        // console.log('Ошибка!');
        return 'Ошибка!';
    }
    
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += `${str[i]}`;
    }
    // console.log(reverseStr);
    return reverseStr;
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];
// console.log(allCurrencies);

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        console.log('Нет доступных валют');
        return 'Нет доступных валют';
    }

    let availableCurr = 'Доступные валюты:\n';

    arr.forEach(function(curr) {
        if (curr != missingCurr) {
            availableCurr += `${curr}\n`;
        }
    });
    console.log(availableCurr);
    return availableCurr;
}

availableCurr(allCurrencies, 'RUB');