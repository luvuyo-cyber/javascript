let emptyArray = [];

for (i = 0; i < 10; i++) { //for loop putting values to emptyArray
    emptyArray.push(i);
};

// console.log(emptyArray); 

// for (j = 0; j < 10; j++) {
//     console.log(emptyArray[j]); //iterating values of array using for loop
// };

for (let arrayValues of emptyArray) { //iterating array values using for of loop
    console.log(arrayValues);
};