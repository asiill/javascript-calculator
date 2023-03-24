/* Javascript calculator */

const del = document.querySelector("#del");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

let previousOperand = document.querySelector(".previous-operand");
let currentOperand = document.querySelector(".current-operand");

function handleNumber() {
    if (this.textContent === "." && currentOperand.textContent.includes(".")) {
        return;
    }
    currentOperand.textContent += this.textContent;
}

function handleOperation() {
    if (currentOperand.textContent === "") {
        return;
    }
    if (previousOperand.textContent !== "") {
        evaluate();
    }
    previousOperand.textContent = (currentOperand.textContent + this.textContent);
    currentOperand.textContent = "";   
}

function deleteItem() {
    let current = currentOperand.textContent;
    currentOperand.textContent = current.slice(0, current.length - 1);
}

function clearDisplay() {
    currentOperand.textContent = "";
    previousOperand.textContent = "";
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error, cannot divide by 0";
    }
    else {
        return a / b;
    }
}

function operate(a, b, operator) {
    let result;
    if (operator === "+") {
        result = add(a, b);
    }
    else if (operator === "-") {
        result = subtract(a, b);
    }
    else if (operator === "x"){
        result = multiply(a, b);
    }
    else if (operator === "÷"){
        result = divide(a, b);
    }
    else {
        result = null;
    }
    return result;
}

function evaluate(){
    let calculation;
    let previous = previousOperand.textContent;
    let operation = previous.charAt(previous.length - 1);

    let prev = parseFloat(previous.slice(0, previous.length - 1));
    let current = parseFloat(currentOperand.textContent);
    
    if (isNaN(prev) || isNaN(current)) {
        return;
    }

    calculation = operate(prev, current, operation);
    currentOperand.textContent = calculation;
    previousOperand.textContent = "";
}

numbers.forEach(n => n.addEventListener("click", handleNumber));
operations.forEach(op => op.addEventListener("click", handleOperation));

del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearDisplay);
equals.addEventListener("click", evaluate);