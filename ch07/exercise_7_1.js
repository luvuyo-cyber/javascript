class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
};

let p = new Person("malcolm", "x");

let f = new Person("slim", "shady");

console.log("hello", f.firstName, "and", p.lastName);



