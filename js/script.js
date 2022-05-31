

function fib(length) {
    
    if (length < 3) {
        return 1;
    } else {
        return  fib(length - 1) + fib(length - 2);
    }

}
console.log(fib(6));