let myWork = [];

for (i = 2, j = 1; j < 11; i++, j++) {
    let object = {};
    object["name"] = "lesson " + j;
    object["status"] = i % 2 === 0 ? true : false; //fix
    myWork.push(object);
};

console.log(myWork);
