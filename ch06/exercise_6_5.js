let variable = "1000";

(function () {
    var variable = "200";
    console.log(variable);
})();

let result = (() => {
    var variable = "hello";
    return variable;
})();

console.log(result);
console.log(variable);

((variable) => {
    console.log ("hello",variable);
})("luvuyo");