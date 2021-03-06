var myName;
myName = "Marcos";
myName = "Shin";
// These error because "myName" is supposed to be a string
// myName = 99;
// myName = [];
//     name      type    value
//      |          |      |
var myNumber = 42;
myNumber = 99;
// These error becaue "myNumber" is supposed to be a number
// myNumber = "hello?";
// myNumber = true;
var isHungry = true;
isHungry = Boolean(1);
// Use "any" sparingly because is defeats the purpose of typescript
var user = {};
user = true;
user = "hello!";
// you can declasre the type of things inside an array
var myArray1 = [];
var myArray2 = [];
myArray1.push("hot dog", "pizza", "banana smoothies");
// Error because "myArray1" can only contain strings
// myArray1.push(99);
//                   "x" must be a number
function quadruple(x) {
    //                                 |
    return x * x * x * x; // "quadruple()" must return a number
}
console.log(quadruple(20));
console.log(quadruple("sup"));
// "myNumbers" must be an array of numbers
function calculateAverage(myNumbers) {
    var total = 0;
    myNumbers.forEach(function (x) {
        total += x;
    });
    return total / myNumbers.length;
}
var names = ["a", "b", "c"];
var myTestScores = [85, 73, 57, 100];
console.log(calculateAverage(myTestScores));
// Errors becasue "names" is an array of strings
// console.log( calculateAverage(names) );
