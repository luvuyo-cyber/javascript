let myTable = [];
let counter = 0;

let rows = 5; //prompt for the number of rows
let columns = 5 //prompt for the number of columns

for (let i = 0; i < rows; i++) {
    let tempTable = [];

    for (let j = 0; j < columns; j++) {
        tempTable[j] = counter;
        counter++;
    };

    myTable.push(tempTable);
};

console.table(myTable);