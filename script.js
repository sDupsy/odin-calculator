const buttons = document.querySelectorAll(".btn");
let calculationDisplay = document.querySelector(".calculation")
let re

const numbers = [0,1,2,3,4,5,6,7,8,9]
const operators = ["+", "-", "÷", "×",]
const equals = "="
const clear = "AC"

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    console.log("Button clicked:", value);
    if (calculationDisplay.textContent === "0" && value in numbers) {
        calculationDisplay.textContent = value;
    }
    else if (value in numbers) {
        calculationDisplay.textContent += value;
    }
  });
});