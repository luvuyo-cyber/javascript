"use strict"
let prize = Number(prompt("select number from 0-10"));
let var1 = "my selection: ";

switch (prize) {
    case 5:
    case 8:
        console.log(var1 + prize + "\nyou get an iPhone 15");
        break;
    case 1:
    case 9:
        console.log(var1 + prize + "\nyou get an airfryer");
        break;
    case 3:
    case 7:
        console.log(var1 + prize +"\nyou get R500")
        break;
    default:
        console.log(var1 + prize + "\nsorry. you get nothing.");
};

