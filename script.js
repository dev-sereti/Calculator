let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    display.value = currentInput;
}

function operate(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        calculate();
    }
    operator = op;
    currentInput = '';
}

function calculate() {
    if (operator && currentInput) {
        let secondOperand = parseFloat(currentInput);
        switch (operator) {
            case '+':
                firstOperand += secondOperand;
                break;
            case '-':
                firstOperand -= secondOperand;
                break;
            case '*':
                firstOperand *= secondOperand;
                break;
            case '/':
                firstOperand /= secondOperand;
                break;
        }
        display.value = firstOperand;
        operator = null;
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    display.value = '';
}
