let gridArray = [];
let numberOfCells = 64;
let counter = 0;
let rows;

for (i = 0; i < numberOfCells; i++) {
    if (counter % 8 === 0) { //creates our rows
        if (rows === undefined) {
            rows = []; //creates new row if rows is undefined
        } else if (rows !== undefined) {
            gridArray.push(rows); //pushes the rows to grid
            rows = []; //creates a fresh row
        };
   
    };
    counter++;
    let tempVar = counter;
    rows.push(tempVar);//pushes numbers to our cells

};
gridArray.push(rows);

console.table(gridArray); 

