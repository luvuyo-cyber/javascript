"use strict"
// friend checker game

// let userName = prompt("what is your name?").toLowerCase();

// switch (userName) {
//     case "njabulo":
//     case "mmeli":
//     case "nokwanda":
//     case "ayanda":
//     case "ntokozo":
//         console.log("hello friend!");
//         break;
//     default:
//         console.log("hello stranger!")
// };

// rock paper scissors game

let array1 = [
    "rock",
    "paper",
    "scissors"
];

let p1 = Math.floor(Math.random() * 3);
let c2 = Math.floor(Math.random() * 3);

let responsePlayer = array1[p1];
let responseComputer = array1[c2];

switch (true) {
    case responsePlayer === responseComputer:
        console.log(`player: ${responsePlayer}\ncomputer: ${responseComputer}`);
        console.log("its a tie");
        break;
    case responsePlayer === array1[0] && responseComputer === array1[2]:
    case responsePlayer === array1[1] && responseComputer === array1[0]:
    case responsePlayer === array1[2] && responseComputer === array1[1]:
        console.log(`player: ${responsePlayer}\ncomputer: ${responseComputer}`);
        console.log("player wins");
        break;
    default:
        console.log(`player: ${responsePlayer}\ncomputer: ${responseComputer}`);
        console.log("computer wins");

};



