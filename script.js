"use strict";

function fib(length) {
    let arr = [0, 1];
    let str = '0 1';    
    if (typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
        return '';
    }
    switch (length) {
        case 1:
            str = '0';
            break;
        default:
            for (let i = 2; i < length; i++) {
                arr[i] = arr[i - 1] + arr[i - 2];
                
                str += ` ${arr[i]}`;
            }
            break;
    }
    return str;
}
fib(9);