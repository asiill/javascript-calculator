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

const del = document.querySelector("#del");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let output = document.querySelector(".output");

function handleNumber() {
    output.textContent += this.textContent;
}

function handleOperator() {
    let currentItem = output.textContent.charAt(output.textContent.length - 1);
    if (currentItem === "" | currentItem === "+" | currentItem === "-" | currentItem === "x" | currentItem === "÷") {
        return;
    }
    else if (currentItem === ".") {
        output.textContent += "0" + this.textContent;
    }
    else {
        output.textContent += this.textContent;
    }
}

function handleDecimal() {
    let currentItem = output.textContent.charAt(output.textContent.length - 1);
    if (currentItem === "" | currentItem === "+" | currentItem === "-" | currentItem === "x" | currentItem === "÷"){
        output.textContent += "0.";
    }
    else if (currentItem === ".") {
        return;
    }
    else {
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

numbers.forEach(n => n.addEventListener("click", handleNumber));
operators.forEach(op => op.addEventListener("click", handleOperator));
decimal.addEventListener("click", handleDecimal);

del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearDisplay);
equals.addEventListener("click", evaluate);