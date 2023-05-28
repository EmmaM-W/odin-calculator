const buttons = document.querySelectorAll('button');
const bttnsContainer = document.querySelector('.buttonsContainer');
const screenText = document.querySelector('.screenText');
const equalsButton = document.querySelector('#equalsButton');
const resultText = document.querySelector('.resultText')
const clearButton = document.querySelector('#clearButton');
const deleteButton = document.querySelector('#deleteButton');
const decimalButton = document.querySelector('#decimalButton')

let firstNumber = 0;
let operation = null;
let storedOperation = null;
let secondNumber = 0;
let currentNumber = '';
let hasBeenPressed = false;
let decimalButtonPressed = false;

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

  clearButton.addEventListener('click', () => {
    reset();
  })

  deleteButton.addEventListener('click', () => {
    backspace();
  })

  equalsButton.addEventListener('click', () => {
    secondNumber = currentNumber;
    console.log(firstNumber,operation,secondNumber);
    resultText.textContent = operate(firstNumber,operation,secondNumber);
  });

  decimalButton.addEventListener('click',() => {
    if (decimalButtonPressed ==  false) {
        appendNumber(decimalButton.textContent);
        decimalButtonPressed = true;
    }
  })

function appendNumber(number){
    currentNumber = currentNumber + number;
    updateScreenContent(number);
    return currentNumber;
}
function setOperation(operator){
    operation = operator;
    decimalButtonPressed = false;
    updateScreenContent(operator);
    if (hasBeenPressed == false) {
        firstNumber = currentNumber;
        console.log(firstNumber);
        currentNumber = '';
        hasBeenPressed = true;
        storedOperation = operator;
    } else {
        secondNumber = currentNumber;
        console.log(secondNumber);
        currentNumber = '';
        console.log(firstNumber,storedOperation,secondNumber);
        firstNumber = operate(firstNumber,storedOperation,secondNumber);
        resultText.textContent = firstNumber;
        storedOperation = operator;
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
    //handle if user tries to divide by zero
    if (y == 0 && operation == "÷") {
        return "nice try punk"
    }
    //handle if user presses = button before using an operation
    if (operation == null){
        return currentNumber;
    }

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

function reset(){
    firstNumber = 0;
    operation = null;
    storedOperation = null;
    secondNumber = 0;
    currentNumber = '';
    hasBeenPressed = false;
    screenText.textContent='';
    resultText.textContent='';

}

function backspace(){
    str = screenText.textContent;
    if (screenText.textContent.charAt(str.length-1) == '+' 
        || screenText.textContent.charAt(str.length-1) == '-' 
        || screenText.textContent.charAt(str.length-1) == 'x' 
        || screenText.textContent.charAt(str.length-1) == '÷') {
        return;

    } else {
          currentNumber = currentNumber.slice(0,-1);
        screenText.textContent = screenText.textContent.slice(0,-1);
    }
}

//When operator button is pressed
//IF currentnumber is number 1, switch currentnumber to number 2
//if currentnumber is 2, OPERATE

//When user presses buttons it should store the number in a variable
//then when the user hits an operator it starts to store the next following numbers in a seperate variable
//if the user hits a second operator, call the operate function, store the result in the first variable, then continue with 2nd number variable