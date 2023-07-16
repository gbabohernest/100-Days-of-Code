const day = document.querySelector("input[id=day]");
const month = document.querySelector("input[id=month]");
const year = document.querySelector("input[id=year]");
const button = document.querySelector("button");

class AgeCalculator {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  // ! Sets the color for all error messages
  setErrorColor() {
    const labels = document.querySelectorAll("label");
    const inputDay = document.querySelector("#day");
    const inputMonth = document.querySelector("#month");
    const inputYear = document.querySelector("#year");

    const inputs = [inputDay, inputMonth, inputYear];

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.borderColor = "hsla(0, 100%, 67%,0.6)";
      labels[i].style.color = "hsl(0, 100%, 67%)";
      labels[i].style.opacity = ".6";
    }
  }
  //! custom error message
  customErrorMessage(elem, msg, color) {
    elem.textContent = msg;
    elem.style.color = color;
  }
  /**
   * ! clears the respective error color and message and set it to its default value
   * ! @errors = an array of element that display error message
   */
  clearErrorColor(errors) {
    const inputs = document.querySelectorAll("input");
    const labels = document.querySelectorAll("label");
    errors.forEach((element) => {
      this.customErrorMessage(element, "", "");
    });

    inputs.forEach((input, index) => {
      input.style.borderColor = "hsl(0, 0%, 86%)";
      labels[index].style.color = "hsl(0, 1%, 44%)";
      labels[index].style.opacity = "1";

      // input.style.transition = "all";
      // input.style.transition = "3ms ease-in-out";
      // input.value = "";
    });
  }

  /*
   ! checks if an input field is empty & display the appropriate message to the user
  */
  checkEmptyFields(birthDay, birthMonth, birthYear) {
    // ! select elements to display error messages
    const dayErrorMsg = document.querySelector("#ddErr");
    const monthErrorMsg = document.querySelector("#mmErr");
    const yearErrorMsg = document.querySelector("#yyErr");

    let dayValue = birthDay.value;
    let monthValue = birthMonth.value;
    let yearValue = birthYear.value;

    // ! An array for error messages
    const errors = [dayErrorMsg, monthErrorMsg, yearErrorMsg];

    if (dayValue === "" && monthValue === "" && yearValue === "") {
      this.setErrorColor();
      this.customErrorMessage(
        dayErrorMsg,
        "This field is required",
        "hsl(0, 100%, 67%)"
      );
      this.customErrorMessage(
        monthErrorMsg,
        "This field is required",
        "hsl(0, 100%, 67%)"
      );

      this.customErrorMessage(
        yearErrorMsg,
        "This field is required",
        "hsl(0, 100%, 67%)"
      );
    }

    if (dayValue !== "") {
      this.customErrorMessage(dayErrorMsg, "", "");
    }
    if (monthValue !== "") {
      this.customErrorMessage(monthErrorMsg, "", "");
    }
    if (yearValue !== "") {
      this.customErrorMessage(yearErrorMsg, "", "");
    }
    if (dayValue !== "" && monthValue !== "" && yearValue !== "") {
      this.clearErrorColor(errors);
    }
  }

  //validate input field for empty values
  validateInputFields() {
    this.checkEmptyFields(this.day, this.month, this.year);
  }
}

const ageCal = new AgeCalculator(day, month, year);
button.addEventListener("click", (e) => {
  e.preventDefault();
  ageCal.validateInputFields();
  //validateInputValues();
});
