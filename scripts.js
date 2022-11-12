let prevValue = 0;
let displayValue = 0;
let operation = '';

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
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a,b);
    }
    else if (operator === '/') {
        return divide (a, b);
    }
}

const display = document.querySelector('.display');
const button1 = document.querySelector('.button_1');
const button2 = document.querySelector('.button_2');
const button3 = document.querySelector('.button_3');
const button4 = document.querySelector('.button_4');
const button5 = document.querySelector('.button_5');
const button6 = document.querySelector('.button_6');
const button7 = document.querySelector('.button_7');
const button8 = document.querySelector('.button_8');
const button9 = document.querySelector('.button_9');
const button0 = document.querySelector('.button_0');
const buttonPlus = document.querySelector('.button_plus');
const buttonMinus = document.querySelector('.button_minus');
const buttonMultiply = document.querySelector('.button_multiply');
const buttonDivide = document.querySelector('.button_divide');
const buttonEquals = document.querySelector('.button_equals');
const buttonClear = document.querySelector('.button_clear');

function populateDisplay(num) {
    console.log(displayValue);
    display.value = num;
}

function updateDisplayValue(num) {
    displayValue *= 10;
    displayValue += num;
    populateDisplay(displayValue);
}

function clearDisplay() {
    displayValue = 0;
    populateDisplay(displayValue);
}



button1.addEventListener('click', function(){
    updateDisplayValue(1);
});

button2.addEventListener('click', function(){
    updateDisplayValue(2);
});

button3.addEventListener('click', function(){
    updateDisplayValue(3);
});

button4.addEventListener('click', function(){
    updateDisplayValue(4);
});

button5.addEventListener('click', function(){
    updateDisplayValue(5);
});

button6.addEventListener('click', function(){
    updateDisplayValue(6);
});

button7.addEventListener('click', function(){
    updateDisplayValue(7);
});

button8.addEventListener('click', function(){
    updateDisplayValue(8);
});

button9.addEventListener('click', function(){
    updateDisplayValue(9);
});

button0.addEventListener('click', function(){
    updateDisplayValue(0);
});

buttonClear.addEventListener('click', function(){
    clearDisplay();
});

buttonPlus.addEventListener('click', function(){
    prevValue = displayValue;
    clearDisplay();
    operation = '+';
});

buttonMinus.addEventListener('click', function(){
    prevValue = displayValue;
    clearDisplay();
    operation = '-';
});

buttonMultiply.addEventListener('click', function(){
    prevValue = displayValue;
    clearDisplay();
    operation = '*';
});

buttonDivide.addEventListener('click', function(){
    prevValue = displayValue;
    clearDisplay();
    operation = '/';
});

buttonEquals.addEventListener('click', function() {
    result = operate(operation, prevValue, displayValue);
    clearDisplay();
    updateDisplayValue(result);
})
