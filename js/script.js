const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    // let arr = data.filter(item => item.amount > 0).map(item => item = item.amount);
    return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
    // .reduce((acc, curr) => acc + curr)
    // let sum = 0;
    // return arr.map(item => item = item.amount);
    // arr.forEach(item => sum += item.amount);
    // return sum;
};
// console.log(getPositiveIncomeAmount(funds));

// getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
    
    // if (!data.every(item => item.amount >= 0)) {
    //     return data.map(item => item = item.amount).reduce((acc, curr) => acc + curr);
    // } else {
    //     return getPositiveIncomeAmount(data);
    // }
    
    return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));