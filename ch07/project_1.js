class Employees {
    constructor(firstName, lastName, numberOfYears) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.numberOfYears = numberOfYears;
    };
};

let person1 = new Employees("sam", "smith", 2);
let person2 = new Employees("young", "thug", 3);

let array = [
    person1,
    person2
];

Employees.prototype.details = function() {
    return this.firstName + " " + this.lastName + " has worked for " + this.numberOfYears + " years"
};

for ( let person of array) {
    console.log(person.details());
};