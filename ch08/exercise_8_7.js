let d = new Date();
console.log(d);
let monthArray = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getMonth());

let s = `${d.getDate()} ${monthArray[d.getMonth()]} ${d.getFullYear()}`
console.log(s);