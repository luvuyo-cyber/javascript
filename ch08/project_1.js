let str = "quintessential";

function scramble(x) {
    let strLength = x.length;
    let temp = "";
    for (let i = 0; i < strLength; i++) {
        let ranIndex = Math.floor(Math.random() * x.length);
        temp += x[ranIndex];
        console.log(temp);
        x = x.slice(0, ranIndex) + x.slice(ranIndex + 1);
        console.log(x);
    };
    return temp;
};
console.log(scramble(str));