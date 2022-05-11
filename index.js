let operator;

function calculator(){
    let result;

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    switch (operator){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 == 0){
                alert ("На ноль делить нельзя!");
                result = null;
            }
            result = number1 / number2;
            break;
        }
    
    document.getElementById("result").innerHTML = result;
}

