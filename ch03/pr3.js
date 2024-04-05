"use strict"

//manipulating an array
const theList = [
    'Laurence',
    'Svekis',
    true,
    35,
    null,
    undefined,
    { test: 'one', score: 55 },
    ['one', 'two']
];

theList.splice(2, 6, "MIDDLE", "Hello World", "LAST");
theList[0] = "FIRST";
console.log(theList);

//company product catalog
let storeInventory = [];

let item1 = {
    name: "rama",
    model: "margarine",
    cost: 25,
    quantity: 10
};
let item2 = {
    name: "sasko",
    model: "bread",
    cost: 17.5,
    quantity: 20
};
let item3 = {
    name: "kiwi",
    model: "shoe polish",
    cost: 37,
    quantity: 5
};

storeInventory[0] = item1;
storeInventory[1] = item2;
storeInventory[2] = item3;

console.log(storeInventory);

console.log(storeInventory[2].quantity)