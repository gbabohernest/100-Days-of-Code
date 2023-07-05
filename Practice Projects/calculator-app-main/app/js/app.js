class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.reset();
  }

  delete() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
  }

  reset() {
    this.currentValue = "";
    this.previousValue = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (this.hasBeenInvoked) {
      this.currentValue = "";
    }
    if (number === "." && this.currentValue.includes(".")) return;
    this.currentValue = this.currentValue.toString() + number.toString();
    this.hasBeenInvoked = false;
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
    this.hasBeenInvoked = true;
  }

  formatDisplay(number) {
    const num = number.toString();
    const intDigits = parseFloat(num.split(".")[0]);
    const decimalDigits = num.split(".")[1];
    let intDisplay;

    if (isNaN(intDigits)) {
      intDisplay = "";
    } else {
      intDisplay = intDigits.toLocaleString("en", { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${intDisplay}.${decimalDigits}`;
    } else {
      return intDisplay;
    }
  }

  updateDisplay() {
    this.currentOperand.innerText = this.formatDisplay(this.currentValue);
    if (this.operation != null) {
      this.previousOperand.innerText = `${this.formatDisplay(
        this.previousValue
      )} ${this.operation}`;
    } else {
      this.previousOperand.innerText = "";
    }
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

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
