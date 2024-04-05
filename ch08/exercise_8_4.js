let string = "thIs will be capiTalized for each word";

let string_function = (x) => {

    let temp = [];

    let s = x.toLowerCase().split(" ");

    s.forEach(element => {
        temp.push(element.charAt(0).toUpperCase() + element.slice(1));
    });

    let u = temp.join(" ");
    
    return u;
};

console.log(string_function(string));