var display = document.getElementById('display'),
expressions = [],
hasDecimal = true,
decimalIndex = 0,
ans,
displayEq,
i = 0;
expressions[i] = "0";

// get the buttons clicked by the user

function getValue(ele) {
 var value = ele.textContent;
 translateValue(value);
 displayEq = displayEquation(expressions);
 display.innerHTML = displayEq;
 var answer = document.getElementById('answer');
 if (ans != undefined) {
 answer.innerHTML = ans;
 }
}

// recieve the value of the clicked button from the getValue function
// and transforms it into a 2D Array

function translateValue(value) {
  var expression = expressions[i];
  switch (value) {
    case "0":
      if (expression != "0") {
        expression += "0";
      }
      break;
    case "1":
      if (expression == "0") {
        expression = "1";
      } else {
        expression += "1"
      }
      
      break;
    case "2":
      if (expression == "0") {
        expression = "2";
      } else {
        expression += "2"
      }
      
      break;
    case "3":
      if (expression == "0") {
        expression = "3";
      } else {
        expression += "3"
      }
      
      break;
    case "4":
      if (expression == "0") {
        expression = "4";
      } else {
        expression += "4"
      }
      
      break;
    case "5":
      if (expression == "0") {
        expression = "5";
      } else {
        expression += "5"
      }
      
      break;
    case "6":
      if (expression == "0") {
        expression = "6";
      } else {
        expression += "6"
      }
      
      break;
    case "7":
      if (expression == "0") {
        expression = "7";
      } else {
        expression += "7"
      }
      
      break;
    case "8":
      if (expression == "0") {
        expression = "8";
      } else {
        expression += "8"
      }
      
      break;
    case "9":
      if (expression == "0") {
        expression = "9";
      } else {
        expression += "9"
      }
      
      break;
    case '➕':
      i++;
      expressions[i] = "+";
      i++;
      expression = "0";
      hasDecimal = true;
      break;
    case '➗':
      i++;
      expressions[i] = "/";
      i++;
      expression = "0";
      hasDecimal = true
      break;
    case '✖️':
      i++;
      expressions[i] = "*";
      i++;
      expression = "0";
      hasDecimal = true
      break;
    case '➖':
      i++;
      expressions[i] = "-";
      i++;
      expression = "0";
      hasDecimal = true
      break;
    case '%':
      if (expression != "0") {
        expression += " * 0.01"
      }
      hasDecimal = true;
      break;
    case "=":
      if ( expressions[0] != undefined) {
        ans = calculate();
      }
      expressions = []; 
      expression = "0";
      hasDecimal = true;
      i = 0;
      break; 
    case "C":
      expressions = [];
      expression = "0";
      hasDecimal = true;
      i = 0;
      break;
    case "⬅️":
      
      if (expression[expression.length - 1] == ".") {
        decimalIndex = expression.length;
      }

      if ((expression.length - 1) < decimalIndex) {
        hasDecimal = true;
      }

      if (expressions.length == 1 && expression.length == 1) {
        expressions = [];
        expression = "0";
        i = 0;
        break;
      } else if (expression.length == 1) {
        expressions.pop();
        i--;
        expression = expressions[i];
      } else {
        expression = expression.slice(0, (expression.length - 1)); 
      }
      
      break;
    case ".":
      if (hasDecimal) {
        expression += ".";
        hasDecimal = false;
      }
      break;
    case "Ans":
      if (ans != undefined && ans != "math error") {
        if (expression == "0") {
          expression = answer.textContent;
        } else {
          expression += answer.textContent;
        }
      }

      break;
    default:
      expressions = [];
      i = 0;
      break;
  }
  expressions[i] = expression;
} 

// using the equation put together by the displayEquation function, evaluate
// expressions and return a value

function calculate() {
  try {
    return eval(displayEq);
  }
  catch {
    return "math error"
  }
}

// converts the 2D expressions Array into a plain string  and returns the equation

function displayEquation(e) {
  var equation = "";
  for (var j = 0; j < e.length; j++) {
    for (var k = 0; k < e[j].length; k++) {
      equation += e[j][k];
    }
    equation += " ";
  }
  return equation
}
