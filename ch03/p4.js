"use strict"
let myCar = {
    name: "volkswagen",
    make: "comfortline",
    model: "golf 1.4tsi",
    color: "white",
    wheels: 4,
    forSale: true
};

let var1 = "color";

myCar[var1] = "red";

var1 = "forSale";

myCar[var1] = false;

console.log(myCar.make, myCar.model);

console.log(myCar.forSale);