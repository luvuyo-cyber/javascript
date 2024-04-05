function calculator(x, y, z) {
    if (z === "-") {
        return(x - y);
    } else {
        return(x + y);
    };

};

let array = [];

for (i = 0; i < 10; i++) {
    let a = i * 5;
    let b = i * i;

    let response = calculator(a,b);
    array.push(response);

};

console.log(array);