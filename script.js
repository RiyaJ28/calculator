firstNumber= null
secondNumber= null
operator= null
y=0
second= "False"
res = null
function clean(){

    console.log("clear");
    $("#display").text('0');
    firstNumber=null
    secondNumber=null
    operator=null
    y=0
    second= "False"
    
}
$(document).ready(function () {
  
});
function display(x){
    if (firstNumber == null){
        $("#display").text(x);
        y++;
        firstNumber = x
    }
    else{
        if (second == "False"){
            $("#display").append(x);
            firstNumber = firstNumber + x
        }
        else{
            $("#display").append(x);
            if (secondNumber == null){
                secondNumber = x
            }
            else{
                secondNumber = secondNumber + x
            }
        }
       
    }
}
function op(x) {
    if (firstNumber == null){
        firstNumber = String(res)
        secondNumber = null
    }
    $("#display").append(x);
    if (operator == null){
        operator = x
    }
    else{
        operator = operator + x
    }
    second = "True"
    
}
function calculate(){
    a = Number(firstNumber)
    b = Number(secondNumber)
    if (operator.length != 1){
        result("Error")
    }
    else if (firstNumber  == null || secondNumber == null){
        result("Error")
    }
    
    else{
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}
}
function add(a, b) {
    result(a + b);
}

function subtract(a, b) {
    result(a - b);
}

function multiply(a, b) {
    result(a * b);
}
function divide(a, b) {
    if(b == 0) {
        result('Error! Division by zero is undefined');
    } else {
        result(a / b);
    }
}
function result(answer){
    res = answer
    operator = null
    firstNumber= null
    secondNumber= null
    $("#display").text(answer);
}
