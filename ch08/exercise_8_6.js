console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));
console.log(Math.floor(Math.random() * 11));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 100) + 1);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 100; i++) {
    console.log(randomNumber(1, 100));
};