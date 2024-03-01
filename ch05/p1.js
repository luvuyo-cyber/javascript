let maxVar = 5;
let randomNumber = Math.floor(Math.random() * maxVar) + 1;
let answerTracker = false;


while (!answerTracker) {
    let userGuess = Number(prompt("guess a number between 1 and 5"));
    
    if (userGuess === randomNumber) {
        alert("your guess was correct. it was " + randomNumber);
        answerTracker = true;
    } else if (userGuess > randomNumber) {
        alert("your guess was high");
    } else {
        alert("your guess was low")
    };

};

