let myList = [{
    "name": "luvuyo",
    "status": true
},
{
    "name": "nhlaka",
    "status": false
}
];

reloader();
function reloader() {
myList.forEach((el) => {
console.log(`${el.name} = ${el.status}`);
});
}
