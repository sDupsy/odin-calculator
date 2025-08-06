const buttons = document.querySelectorAll(".btn");
let calculationDisplay = document.querySelector(".calculation");
let resultDisplay = document.querySelector(".result");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

const numbers = [0,1,2,3,4,5,6,7,8,9]
const operators = ["+", "-", "÷", "×",]
const equals = "="
const clear = "AC"

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a,b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1,num2);
  }
  else if (operator === "-") {
    return subtract(num1,num2);
  }
  else if (operator === "×") {
    return multiply(num1,num2);
  }
  else if (operator === "÷" && num2 === 0) {
    return "Error";
  }
  else if (operator === "÷") {
    return divide(num1,num2);
  }
}

function clearAll(){
  resultDisplay.textContent = "";
  calculationDisplay.textContent = 0;
  a = 0;
  b = 0;
  operator = "";
  temp = "";
}

let a = 0;
let b = 0;
let operator = "";
let temp ="";


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    console.log("Button clicked:", value);
    if (calculationDisplay.textContent === "0" && value in numbers) {
        calculationDisplay.textContent = value;
    }
    else if (operators.includes(value) && operators.some(operator => calculationDisplay.textContent.includes(operator))) {
      resultDisplay.textContent = `${calculationDisplay.textContent} ${"="}`;
      calculationDisplay.textContent =  `${operate(a, b, operator)} ${value}`;
      a = Number.parseInt(operate(a, b, operator));
      b = 0;
      operator = value;
      temp = "";
    }
    else if ((numbers.includes(Number(value)) && operators.some(operator => calculationDisplay.textContent.includes(operator)))) {
      temp = temp + value;
      b = Number.parseInt(temp)
      calculationDisplay.textContent = `${a} ${operator} ${b}`;
      console.log(b)
    }
    else if ((numbers.includes(Number(value)) && resultDisplay.textContent !== "")) {
      clearAll();
      calculationDisplay.textContent = value;
    }


    else if (numbers.includes(Number(value))) {
        calculationDisplay.textContent += value;
    }
    else if (operators.includes(value)) {
      a = Number.parseInt(calculationDisplay.textContent);
      operator = value;
      calculationDisplay.textContent = `${a} ${value}`;
      console.log(operator)
    }
    
  });
});

equalsButton.addEventListener("click", () => {
  if (a != 0 || b!= 0) {
    resultDisplay.textContent = `${calculationDisplay.textContent} ${"="}`;
    calculationDisplay.textContent = operate(a, b, operator);
    temp = "";
  }
})

clearButton.addEventListener("click", () => {
  clearAll()
});