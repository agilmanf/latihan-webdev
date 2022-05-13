"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator (+ or - or * or /):\n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    var firstNum = checkNumber(firstStr);
    var secondNum = checkNumber(secondStr);
    if (!firstNum || !secondNum) {
        console.log("INVALID NUMBER\n");
        return main();
    }
    var result = calculate(firstNum, operator, secondNum);
    console.log(result);
}
function calculate(first, operator, second) {
    switch (operator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return first / second;
        default: {
            console.log(operator + " IS NOT VALID OPERATOR/\n");
            return main();
        }
    }
}
function checkNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum ? maybeNum : isNum;
}
main();
