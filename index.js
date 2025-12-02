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
    } else if (operator === '/') {
        if (b === 0) {return undefined};
        return divide(a,b);
    }
}

function roundNumber (num) {
    return Math.round(num * 1e10) / 1e10;
}

const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".btn");
const operatorButtons = document.querySelectorAll(".rbtn");

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

        if (btn.textContent === ".") {
            if (display.innerHTML.includes(".")) {
                return;
            }
        }

        display.innerHTML += btn.textContent;
    });
});


operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        const value = btn.textContent;

        if (value === "C") {
            display.innerHTML = "";
            firstNumber = "";
            secondNumber = "";
            operator = null;
            return;
        }

        if (value === "del") {
            display.innerHTML = display.innerHTML.slice(0, -1);
            return;
        }

        if (value === "=") {
            if (!operator || !firstNumber) return;

            secondNumber = display.innerHTML;

            const result = operate(operator, Number(firstNumber), Number(secondNumber));

            const final = roundNumber(result);
            display.innerHTML = final;
            firstNumber = final;
            operator = null;
            shouldResetDisplay = true;
            return;
        }

        if(["+", "-", "x", "/"].includes(value)) {

            const lastChar = display.innerHTML.slice(-1);

            if(["+", "-", "x", "/"].includes(lastChar)) {
                display.innerHTML = display.innerHTML.slice(0, -1) + value;
                operator = value;
                return;
            }

        if (operator) {
            secondNumber = display.innerHTML;

            const result = operate(operator, Number(firstNumber), Number(secondNumber));

            display.innerHTML = final;
            firstNumber = final;
        } else {
            firstNumber = display.innerHTML;
        }
     
        operator = value;
        shouldResetDisplay = true;

        display.innerHTML += value;

        return;
    }
    });
});

const allButtons = [...numberButtons, ...operatorButtons];

function handleKeyPress(key) {
    if (key === "*") key = "x";
    if (key === "Enter") key = "=";
    if (key === "Backspace") key = "del";
    if (key === "Escape") key = "C";

    allButtons.forEach(btn => {
        if (btn.textContent === key) {
            btn.click();
        }
    });
}

document.addEventListener("keydown", (e) => handleKeyPress(e.key));