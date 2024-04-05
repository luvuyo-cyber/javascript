let x = 2;
let y = 3;

let z = "-";

function calculator(x, y, z) {
    if (z === "-") {
        console.log(x - y);
    } else {
        console.log(x + y);
    };
};

calculator(x, y, z);