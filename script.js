/* Javascript calculator */

const del = document.querySelector("#del");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let output = document.querySelector(".output");

numbers.forEach(n => n.addEventListener("click", handleNumber));
operators.forEach(op => op.addEventListener("click", handleOperator));
decimal.addEventListener("click", handleDecimal);

del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearDisplay);
equals.addEventListener("click", evaluate);

function handleNumber() {
    output.textContent += this.textContent;
}

function handleOperator() {
    // Retrieve the final character from the current display
    let currentItem = output.textContent.charAt(output.textContent.length - 1);
    // Prevent the addition of multiple consecutive operators or operators following an empty string
    if (currentItem === "" | currentItem === "+" | currentItem === "-" | currentItem === "x" | currentItem === "÷") {
        return;
    }
    // If the final character is a decimal, include a 0 before the operator
    else if (currentItem === ".") {
        output.textContent += "0" + this.textContent;
    }
    else {
        output.textContent += this.textContent;
    }
}

function handleDecimal() {
    // Retrieve the final character from the current display
    let currentItem = output.textContent.charAt(output.textContent.length - 1);
    // If the final character is an operator or is an empty string, include a 0 before the decimal
    if (currentItem === "" | currentItem === "+" | currentItem === "-" | currentItem === "x" | currentItem === "÷"){
        output.textContent += "0.";
    }
    // Prevent the addition of multiple consecutive decimals
    else if (currentItem === ".") {
        return;
    }
    else {
        // Prevent the addition of multiple decimals within the same operand
        let opr = output.textContent.replaceAll("-", "+").replaceAll("x", "+").replaceAll("÷", "+").split("+");
        let oprEnd = opr.pop();
        if (oprEnd.includes(".")) {
            return;
        }
        else {
            output.textContent += ".";
        }
    }
}

function deleteItem() {
    let currentOutput = output.textContent;
    output.textContent = currentOutput.slice(0, currentOutput.length - 1);
}

function clearDisplay() {
    output.textContent = "";
}

function evaluate(){
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
        return "ERROR";
    }
    else {
        return a / b;
    }
}