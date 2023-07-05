class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.reset();
  }

  delete() {}

  reset() {
    this.currentValue = "";
    this.previousValue = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentValue.includes(".")) return;
    this.currentValue = this.currentValue.toString() + number.toString();
  }

  selectOperation(operation) {
    if (this.currentValue === "") return;
    if (this.previousValue !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousValue = this.currentValue;
    this.currentValue = "";
  }

  compute() {
    let computation;
    const preValue = parseFloat(this.previousValue);
    const currValue = parseFloat(this.currentValue);

    if (isNaN(preValue) || isNaN(currValue)) return;

    switch (this.operation) {
      case "+":
        computation = preValue + currValue;
        break;
      case "-":
        computation = preValue - currValue;
        break;
      case "/":
        computation = preValue / currValue;
        break;
      case "x":
        computation = preValue * currValue;
        break;
      default:
        return;
    }
    this.currentValue = computation;
    this.operation = undefined;
    this.previousValue = "";
  }

  updateDisplay() {
    this.currentOperand.innerText = this.currentValue;
    this.previousOperand.innerText = this.previousValue;
  }
}

const numButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation");
const resetButton = document.querySelector("[data-reset]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperand = document.querySelector("[data-prev-value]");
const currentOperand = document.querySelector("[data-current-value]");

const calculator = new Calculator(previousOperand, currentOperand);

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.selectOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

resetButton.addEventListener("click", () => {
  calculator.reset();
  calculator.updateDisplay();
});
