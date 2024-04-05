let array = [
    "amazing",
    "loving",
    "kind",
    "sensational"
];

function nameCompliment() {
    let userName = prompt("what is your name? ");
    let randomVar = array[Math.floor(Math.random() * array.length)];
    console.log("hi", userName + "!", "you are", randomVar);

};

nameCompliment();