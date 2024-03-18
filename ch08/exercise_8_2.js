let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
    "Laurence", "Mike", "Laurence", "Mike"];

let filter_arr = arr.filter((element, index, array) => {
    console.log(element, index, array.indexOf(element));
    return array.indexOf(element) === index;
});

console.log(filter_arr);