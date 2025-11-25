// .reduce for following functions

let initial
let operator 
let result

function add(array) {
    return(a + b);
}

function subtract(a,b) {
    return(a - b);
}

function multiply(a,b) {
    return(a * b);
}

function divide(a,b) {
    return(a / b);
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === '*') {
        return multiply(a,b);
    } else (operator === '/'); {
        return divide(a,b);
    }
}

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".btn");

numberButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        display.innerHTML += btn.textContent;
//        initial = display;
    });
});

const operatorButtons = document.querySelectorAll(".rbtn");

operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.textContent);
    });
});
