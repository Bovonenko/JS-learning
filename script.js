"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50250
};

function isBudgetEnough(data) {
    const {height} = data;
    const {moneyPer1m3} = data;
    const {budget} = data;
    const {shops} = data;

    let s = 0;
    let v = 0;
    shops.forEach((item) => {
        s += item.width * item.length;
    });
    v = height * s;
    if (v * moneyPer1m3 > budget) {
        console.log('Бюджета недостаточно');
    } else {
        console.log('Бюджета достаточно');
    }
    console.log(v * moneyPer1m3);
}

isBudgetEnough(shoppingMallData);


// const obj = {
//     width: 10,
//     length: 5
// };
// let calc = obj.width * obj.length;

// calc += 2 * 5;
// console.log(calc);
