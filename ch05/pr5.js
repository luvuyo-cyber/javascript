let multiplicationTable = [];
let valueVar = 20;

for (i = 0; i < valueVar + 1; i++) { //for the rows
    
    let tempArray = [];

    for(j = 0; j < valueVar; j++) { //for the columns

        tempArray.push(i * j);

    }

    multiplicationTable.push(tempArray);

};
 
console.table(multiplicationTable); 