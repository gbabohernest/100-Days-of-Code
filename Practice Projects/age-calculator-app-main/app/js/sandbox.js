const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const button = document.querySelector("#btn");

class AgeCalculator {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  // ! set error message for all empty inputs
  setErrorMsgForAllFields(dd, mm, yy) {
    this.customErrorMessage(dd, "This field is required", "hsl(0, 100%, 67%)");
    this.customErrorMessage(mm, "This field is required", "hsl(0, 100%, 67%)");
    this.customErrorMessage(yy, "This field is required", "hsl(0, 100%, 67%)");
  }
  // ! Sets the color for all error messages
  setErrorColor() {
    const labels = document.querySelectorAll("label");
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input, index) => {
      input.style.borderColor = "hsla(0, 100%, 67%,0.6)";
      labels[index].style.color = "hsl(0, 100%, 67%)";
      labels[index].style.opacity = ".6";
    });
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
  checkEmptyInputFields(birthDay, birthMonth, birthYear) {
    // ! select elements to display error messages
    const dayErrorMsg = document.querySelector("#ddErr");
    const monthErrorMsg = document.querySelector("#mmErr");
    const yearErrorMsg = document.querySelector("#yyErr");

    // ! An array for error messages
    const errors = [dayErrorMsg, monthErrorMsg, yearErrorMsg];

    const dayValue = birthDay.value.length === 0;
    const monthValue = birthMonth.value.length === 0;
    const yearValue = birthYear.value.length === 0;

    if (dayValue && monthValue && yearValue) {
      this.setErrorColor();
      this.setErrorMsgForAllFields(dayErrorMsg, monthErrorMsg, yearErrorMsg);
    }

    if (dayValue) {
      this.setErrorColor();
      this.setErrorMsgForAllFields(dayErrorMsg, monthErrorMsg, yearErrorMsg);
    }
    if (monthValue) {
      this.setErrorColor();
      this.setErrorMsgForAllFields(dayErrorMsg, monthErrorMsg, yearErrorMsg);
    }
    if (yearValue) {
      this.setErrorColor();
      this.setErrorMsgForAllFields(dayErrorMsg, monthErrorMsg, yearErrorMsg);
    }
    if (!dayValue) {
      this.customErrorMessage(dayErrorMsg, "", "");
    }
    if (!monthValue) {
      this.customErrorMessage(monthErrorMsg, "", "");
    }
    if (!yearValue) {
      this.customErrorMessage(yearErrorMsg, "", "");
    }
    if (!dayValue && !monthValue && !yearValue) {
      this.clearErrorColor(errors);
      console.log("okkkay");
      //this.sanitizeInputFieldValue(dayValue, monthValue, yearValue);
    }
  }

  sanitizeInputFieldValue(dd, mm, yy) {
    const dayValue = parseInt(this.dd);
    const monthValue = parseInt(this.mm);
    const yearValue = parseInt(this.yy);

    // if (dayValue === 0 || dayValue > 31) {
    //   console.log("invalied day");
    // }
    console.log(dayValue);
  }

  //validate input field for empty values
  validateInputFields() {
    this.checkEmptyInputFields(this.day, this.month, this.year);
  }
}

const ageCal = new AgeCalculator(day, month, year);
button.addEventListener("click", (e) => {
  e.preventDefault();
  ageCal.validateInputFields();
  console.log("let see");
  //validateInputValues();
});
