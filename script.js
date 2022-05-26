"use strict";

function calculateVolumeAndArea(edge) {
    if (edge > 0 && typeof(edge) != 'string' && edge / Math.round(edge) === 1) {
        console.log(`Объем куба: ${edge * edge * edge}, площадь всей поверхности ${6 * edge * edge}`);
    } else {
        console.log(`Ошибка`);
    }
}
calculateVolumeAndArea(-4);

console.log(Math.ceil(5.2));


function getCoupeNumber(num) {
    if (num / Math.round(num) != 1 && num != 0 || typeof(num) == 'string' || num < 0) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
        console.log(typeof(num));
    } else if (num === 0 || num > 36) {
        console.log("Таких мест в вагоне не существует");
        return "Таких мест в вагоне не существует";
    } else {
        console.log(Math.ceil(num / 4));
        return Math.ceil(num / 4);
    }
}
getCoupeNumber('2');
let num = 35.5;
console.log(num / Math.round(num) == 1 );