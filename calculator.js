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

let num1 = '';
let operator;
let num2 = '';
let selectedOperatorButton = null;
let decimalAdded = false;


function operate(operator, num1, num2) {
    let result;
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "plus" || operator === "+") {
        result = add(num1, num2);
    } else if (operator === "minus" || operator === "-") {
        result = subtract(num1, num2)
    } else if (operator === "multiply" || operator === "x") {
        result = multiply(num1, num2);
    } else if (operator === "divide" || operator === "/") {
        if (num2 === 0) {
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

let counter = 1;
const display = document.querySelector(".display");
display.textContent = 0;

const clickedButton = document.querySelectorAll('.number');
clickedButton.forEach(button => {
    button.addEventListener("click", function (event) {
        if (counter === 1) {
            num1 += event.target.value;
            console.log('Clicked button value (num1):', num1);
            display.textContent = num1;
            console.log("counter value for num1", counter);
        } else if (counter === 2 || counter === 3) {
            num2 += event.target.value;
            console.log('Clicked button value (num2):', num2);
            display.textContent = num2;

            if (selectedOperatorButton) {
                selectedOperatorButton.style.backgroundColor = "";
            }
            counter = 3;
            console.log("counter", counter);
        }
        const acButton = document.querySelector(".ac");
        acButton.textContent = "C";

    })
})



let operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(button => {
    button.addEventListener("click", function (event) {
        if (counter === 1) {
            operator = event.target.value;
            console.log('Clicked operator:', operator);
            console.log("counter", counter);
            button.style.backgroundColor = "yellow";
            selectedOperatorButton = button;
            counter = 2;
            decimalAdded = false;
            console.log("counter", counter);
            num2 = "";

        } else if (counter === 3) {
            console.log('Clicked operator:', operator);
            console.log("counter", counter);
            let displayResult = operate(operator, num1, num2);
            display.textContent = displayResult;
            num1 = displayResult;
            console.log("num1 after finishing 1st operation", num1);
            operator = event.target.value;
            console.log('Clicked operator:', operator);
            button.style.backgroundColor = "yellow";
            selectedOperatorButton = button;
            counter = 2;
            decimalAdded = false;
            console.log("counter", counter);
            num2 = "";
        }
    })
})

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener("click", function (event) {
    let equals = event.target.value;
    console.log("equals operator", equals);
    let displayResult = operate(operator, num1, num2);
    display.textContent = displayResult;
    num1 = displayResult;
    console.log("num1 after finishing 1st operation", num1);
    counter = 1;
    console.log("counter", counter);


})

acButton = document.querySelector('.ac');
acButton.addEventListener("click", function () {
    if (counter === 2 || counter === 3) {
        display.textContent = 0;
        selectedOperatorButton.style.backgroundColor = "yellow";
        num2 = "";
        decimalAdded = false;
    } else {
        acButton.textContent = "AC";
        num1 = "";
        if (selectedOperatorButton) {
            selectedOperatorButton.style.backgroundColor = "";
        }
        selectedOperatorButton = null;
        num2 = "";
        display.textContent = 0;
        counter = 1;
        console.log("counter", counter);
        decimalAdded = false;
    }

})

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", function () {
    if (counter === 1 && !decimalAdded) {
        num1 += ".";
        display.textContent = num1;
        decimalAdded = true;
    } else if ((counter === 2 || counter === 3) && !decimalAdded) {
        num2 += ".";
        display.textContent = num2;
        decimalAdded = true;
    }
})





