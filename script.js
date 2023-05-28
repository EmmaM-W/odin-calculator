const buttons = document.querySelectorAll('button');
const bttnsContainer = document.querySelector('.buttonsContainer');

let firstNumber = 0;
let opperation = null;
let secondNumber = 0;

//USE THIS TO SET BUTTONS SIZES
const bttnContainerWidth = 200;
bttnsContainer.style.width = bttnContainerWidth + "px";

buttons.forEach((button) => {
    if (button.id == 'clearButton' || button.id == 'deleteButton') {
        button.style.width = (bttnContainerWidth/2)-5 + "px";
    } else {
        button.style.width = (bttnContainerWidth/4)-5 + "px";
    }
  });



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
    if (operation == '+') {
        return add(x,y);
    }
    if (operation == '-') {
        return subtract(x,y);
    }
    if (operation == '*') {
        return multiply(x,y);
    }
    if (operation == '/') {
        return divide(x,y);
    }
}

//When user presses buttons it should store the number in a variable
//then when the user hits an operator it starts to store the next following numbers in a seperate variable
//if the user hits a second operator, call the operate function, store the result in the first variable, then continue with 2nd number variable