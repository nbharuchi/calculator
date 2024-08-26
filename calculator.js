function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1;
let operator;
let num2;

function operate(operator, num1, num2) {
    let result;
    if (operator === "plus" || operator === "+") {
        result = add(num1, num2);
    } else if (operator === "minus" || operator === "-") {
        result = subtract(num1, num2)
    } else if (operator === "multiply" || operator === "*") {
        result = multiply(num1, num2);
    } else if (operator === "divide" || operator === "/") {
        if (num2 / 0) {
            console.error("Oops! division by zero!");
            return undefined;
        }
        result = divide(num1, num2);
    }
    else {
        console.error("unknown operator");
        return undefined;
    }
    console.log("result: ", result);
    return result;
}