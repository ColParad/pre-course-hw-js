function factorial(n) {
    console.log("Debugging");
    debugger;
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));