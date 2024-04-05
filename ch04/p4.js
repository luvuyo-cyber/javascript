"use strict"
let randomVar = Math.floor(Math.random() * 6);
let stringVar = String(prompt("what is your question?"));
let endResponse;

switch (randomVar) {
    case 0:
        endResponse = "be brave enough to be bad at something new.";
        break;
    case 1:
        endResponse = "it is okay not to be okay.";
        break;
    case 2:
        endResponse = "change will come when the pain of staying the same is worse than the pain of change.";
        break;
    case 3:
        endResponse = "everything you need is already within you.";
        break;
    case 4:
        endResponse = "congratulations on powering through this day.";
        break;
    case 5:
        endResponse = "you're doing your best and that is good enough.";
        break;
};

console.log(`my question: ${stringVar}\nmy answer: ${endResponse}`);
