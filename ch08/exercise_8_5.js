let string = "I love JavaScript";
let lowerString = string.toLowerCase();
let array = ["a", "e", "i", "o", "u"];

array.forEach((element, index) => {
    console.log(element);
    lowerString = lowerString.replaceAll(element, index);
});

console.log(lowerString);