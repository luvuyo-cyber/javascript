"use strict"
let age = Number(prompt("what is your age?"));
let messageVar;
if (age >= 21) {
    messageVar = "you can enter venue and purchase alcohol";
} else if (age <= 19) {
    messageVar = "you can enter venue but not purchase alcohol";
} else {
    messageVar = "you can not enter the venue"
};

alert(messageVar);

