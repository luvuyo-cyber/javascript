function myFactorial(a) {

    if (a === 0) {
        return 1;
    } else {
        return a * myFactorial(a - 1);
    }
}

console.log(myFactorial(5));