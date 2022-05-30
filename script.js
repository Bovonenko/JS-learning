"use strict";

const restorantData = { 
    menu: [ 
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '30$',
    openNow: true
};

function transferWaitors(data) {debugger
    
    const copy = JSON.parse(JSON.stringify(data));

    copy.waitors[0] = {name: 'Mike', age: 32};debugger
    return copy;
}
debugger
transferWaitors(restorantData);


// let prc = '14$';
// let prce = '14$';
// console.log(+prc.slice(0, -1) + 2);
// // function isOpen(prop) {
// //     let answer = '';
// //     answer = prop.openNow ? 'Открыто' : 'Закрыто';

// //     return answer;
// // }

// // console.log(isOpen(restorantData));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     console.log(+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)));
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));