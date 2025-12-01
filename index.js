// .reduce for following functions

let firstNumber = "";
let secondNumber = "";
let operator = null;
let shouldResetDisplay = false;


function add(a,b) {
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
    } else if (operator === 'x') {
        return multiply(a,b);
    } else if (operator === '/'); {
        return divide(a,b);
    }
}

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".btn");

numberButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (shouldResetDisplay) {
            display.innerHTML = "";
            shouldResetDisplay = false;
        }

        if (btn.innerHTML === "+/-") {
            display.innerHTML = String(-Number(display.innerHTML));
            return;
        }

        display.innerHTML += btn.textContent;
    });
});

const operatorButtons = document.querySelectorAll(".rbtn");

operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.textContent === "C") {
            display.innerHTML = "";
        }

        if (btn.textContent === "del") {
            display.innerHTML = display.innerHTML.slice(0, -1);
            return;
        }

        if (btn.textContent !== "=") {
            firstNumber = display.innerHTML;
            operator = btn.textContent;
            shouldResetDisplay = true;
        } else {
            secondNumber = display.innerHTML;

            const result = operate(operator, Number(firstNumber), Number(secondNumber));

            display.innerHTML = result;
            firstNumber = result;
            operator = null;
            shouldResetDisplay = true;
        }

    });
});
