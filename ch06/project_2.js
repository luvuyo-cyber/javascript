let outputOne = () => console.log("one");

let outputTwo = () => console.log("two");

let outputThree = () => {
    console.log("three");
    outputOne();
    outputTwo();
};

let outputFour = () => {
    console.log("four");
    setTimeout(outputOne, 1000);
    outputThree();
};

outputFour();