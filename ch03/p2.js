"use strict"
let shoppingList = [];
shoppingList[0] = "milk";
shoppingList[1] = "bread";
shoppingList[2] = "apples";

shoppingList.splice(1, 1, "bananas", "eggs");

shoppingList.pop();

shoppingList.sort();

console.log(shoppingList.indexOf("milk"));

console.log(shoppingList);

shoppingList.splice(1, 0, "carrots", "lettuce");

let shoppingList2 = [
    "juice",
    "pop",
];

let finalShoppingList = shoppingList.concat(shoppingList2, shoppingList2);

console.log(finalShoppingList.lastIndexOf("pop"));

console.log(finalShoppingList);