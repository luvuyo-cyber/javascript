let stringVar = "";
let skipVar = 5;

for (i = 0; i < 10; i++) {
    if (i === skipVar) {
        // continue;
        break;
    } else {
        stringVar += i;
    }
};

console.log(stringVar);