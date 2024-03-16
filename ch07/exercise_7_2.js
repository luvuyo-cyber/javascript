class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    fullName() {
        return "hi there: " + this.firstName + " " + this.lastName;
    };
};

let person1 = new Person("kendrick", "lamar");
let person2 = new Person("dr", "dre");

console.log(person1.fullName());
console.log(person2.fullName());