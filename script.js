const buttons = document.querySelectorAll(".btn");
let calculationDisplay = document.querySelector(".calculation")
let re

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

let a = 0;
let b = 0;
let operator = "";
let temp ="";

// arr.some(op => str.includes(op)

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    console.log("Button clicked:", value);
    if (calculationDisplay.textContent === "0" && value in numbers) {
        calculationDisplay.textContent = value;
    }
      else if (value in numbers && operators.some(op => calculationDisplay.textContent.includes(op))) {
      temp = temp + value;
      b = Number.parseInt(temp)
      calculationDisplay.textContent = `${a} ${operator} ${b}`;
      console.log(b)
    }
    else if (value in numbers) {
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