

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'Wrong number!';
    } else if (n <= 0) {
        return 1;
    }
    else if (n == 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));