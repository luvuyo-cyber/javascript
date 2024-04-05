class Menu {
    #price1;
    #price2;

    constructor(nr1, nr2) {
        this.nr1 = nr1;
        this.nr2 = nr2;
        this.#price1 = 3;
        this.#price2 = 4;
    };

    totalCost() {
        return (this.nr1 * this.#price1) + (this.nr2 * this.#price2);
    };

    get getTotal() {
        return this.totalCost(); //invokes the totalCost() method
    };
};

let items1 = new Menu(2,2);
let items2 = new Menu(3,3);

console.log("first items total:",items1.getTotal);
console.log("second items total:", items2.getTotal);