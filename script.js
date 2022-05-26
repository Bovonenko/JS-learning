"use strict";

function calculateVolumeAndArea(length) {
//     if (edge > 0 && typeof(edge) != 'string' && edge / Math.round(edge) === 1) {
//         console.log(`Объем куба: ${edge * edge * edge}, площадь всей поверхности ${6 * edge * edge}`);
//     } else {
//         console.log(`Ошибка`);
//     }

if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
}

let volume = 0,
    area = 0;

volume = length * length * length;
// length ** 3 - это тоже самое, что и выше или варианты через цикл.
// ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
area = 6 * (length * length);

return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}
calculateVolumeAndArea(-4);

console.log(Math.ceil(5.2));


function getCoupeNumber(seatNumber) {
    // if (num / Math.round(num) != 1 && num != 0 || typeof(num) == 'string' || num < 0) {
    //     console.log("Ошибка. Проверьте правильность введенного номера места");
    //     console.log(typeof(num));
    // } else if (num === 0 || num > 36) {
    //     console.log("Таких мест в вагоне не существует");
    //     return "Таких мест в вагоне не существует";
    // } else {
    //     console.log(Math.ceil(num / 4));
    //     return Math.ceil(num / 4);
    // }

    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
}
getCoupeNumber('2');
