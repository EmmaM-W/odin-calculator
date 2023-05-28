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