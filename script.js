const buttons = document.querySelectorAll('button');
const bttnsContainer = document.querySelector('.buttonsContainer');
const screenText = document.querySelector('.screenText');
const equalsButton = document.querySelector('#equalsButton');
const resultText = document.querySelector('.resultText')

let firstNumber = 2;
let operation = null;
let secondNumber = 3;
let currentNumber = '';
let hasBeenPressed = false;

//USE THIS TO SET BUTTONS SIZES
const bttnContainerWidth = 200;
bttnsContainer.style.width = bttnContainerWidth + "px";

buttons.forEach((button) => {
    //sets the size of the buttons
    if (button.id == 'clearButton' || button.id == 'deleteButton') {
        button.style.width = (bttnContainerWidth/2)-5 + "px";
    } else {
        button.style.width = (bttnContainerWidth/4)-5 + "px";
    }
    if (button.className == 'numberButton') {
        button.addEventListener('click',() => {
            appendNumber(button.textContent);
        })
    }
    if (button.className == 'operatorButton') {
        button.addEventListener('click',() => {
            setOperation(button.textContent);
            
        })
    }

  });

  equalsButton.addEventListener('click', () => {
    
    resultText.textContent = operate(firstNumber,operation,secondNumber);
  });

function appendNumber(number){
    currentNumber = currentNumber + number;
    updateScreenContent(number);
    return currentNumber;
}
function setOperation(operator){
    operation = operator;
    updateScreenContent(operator);
    if (hasBeenPressed == false) {
        firstNumber = currentNumber;
        currentNumber = 0;
        hasBeenPressed = true;
    } else {
        secondNumber = currentNumber;
        operate(firstNumber,operation,secondNumber);
    }
}
function updateScreenContent(input){
    screenText.textContent = screenText.textContent + input;
}


function add (x,y){
    return x+y;
}
function subtract (x,y){
    return x-y;
}
function multiply (x,y){
    return x*y;
}
function divide (x,y){
    return x/y;
}

function operate (x,operation,y){
    x = Number(x);
    y = Number(y);
    if (operation == '+') {
        return add(x,y);
    }
    if (operation == '-') {
        return subtract(x,y);
    }
    if (operation == 'x') {
        return multiply(x,y);
    }
    if (operation == '÷') {
        return divide(x,y);
    }
}

//When operator button is pressed
//IF currentnumber is number 1, switch currentnumber to number 2
//if currentnumber is 2, OPERATE

//When user presses buttons it should store the number in a variable
//then when the user hits an operator it starts to store the next following numbers in a seperate variable
//if the user hits a second operator, call the operate function, store the result in the first variable, then continue with 2nd number variable