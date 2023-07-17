const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const button = document.querySelector("#btn");

class AgeCalculator {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    // ! Select elements to display error messages
    this.dayErrorMsg = document.querySelector("#ddErr");
    this.monthErrorMsg = document.querySelector("#mmErr");
    this.yearErrorMsg = document.querySelector("#yyErr");
  }

  // ! Sets Error Message for all Empty Inputs
  setErrorMsgForAllFields(dd, mm, yy) {
    this.customErrorMessage(dd, "This field is required", "hsl(0, 100%, 67%)");
    this.customErrorMessage(mm, "This field is required", "hsl(0, 100%, 67%)");
    this.customErrorMessage(yy, "This field is required", "hsl(0, 100%, 67%)");
  }

  // ! Sets color value for all Error Messages
  setErrorColor() {
    const labels = document.querySelectorAll("label");
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input, index) => {
      input.style.borderColor = "hsla(0, 100%, 67%,0.6)";
      labels[index].style.color = "hsl(0, 100%, 67%)";
      labels[index].style.opacity = ".6";
    });
  }

  //! Custom Error Message
  customErrorMessage(element, message, color) {
    element.textContent = message;
    element.style.color = color;
  }

  /**
   * ! Clears the Respective Error Message
   * ! And sets  its  color value to default
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
    });
  }

  /*
   ! Checks if an Input field is Empty 
   ! And Display the appropriate Error Message to the user
  */
  checkEmptyInputFields(birthDay, birthMonth, birthYear) {
    // ! An array of elements
    const errors = [this.dayErrorMsg, this.monthErrorMsg, this.yearErrorMsg];

    const dayValue = birthDay.value.length === 0;
    const monthValue = birthMonth.value.length === 0;
    const yearValue = birthYear.value.length === 0;

    if (dayValue && monthValue && yearValue) {
      this.setErrorColor();
      this.setErrorMsgForAllFields(
        this.dayErrorMsg,
        this.monthErrorMsg,
        this.yearErrorMsg
      );
    }

    if (dayValue) {
      this.setErrorColor();
      this.setErrorMsgForAllFields(
        this.dayErrorMsg,
        this.monthErrorMsg,
        this.yearErrorMsg
      );
    }

    if (monthValue) {
      this.setErrorColor();
      this.setErrorMsgForAllFields(
        this.dayErrorMsg,
        this.monthErrorMsg,
        this.yearErrorMsg
      );
    }
    if (yearValue) {
      this.setErrorColor();
      this.setErrorMsgForAllFields(
        this.dayErrorMsg,
        this.monthErrorMsg,
        this.yearErrorMsg
      );
    }
    if (!dayValue) {
      this.customErrorMessage(this.dayErrorMsg, "", "");
    }
    if (!monthValue) {
      this.customErrorMessage(this.monthErrorMsg, "", "");
    }
    if (!yearValue) {
      this.customErrorMessage(this.yearErrorMsg, "", "");
    }
    if (!dayValue && !monthValue && !yearValue) {
      this.clearErrorColor(errors);
      this.sanitizeInputFieldsValues(birthDay, birthMonth, birthYear);
    }
  }

  /*
    ! Sanitize the values from the Inputs
    ! And Display custom Error Message 
  */
  sanitizeInputFieldsValues(dd, mm, yy) {
    const day = parseInt(dd.value);
    const month = parseInt(mm.value);
    const year = parseInt(yy.value);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const totalDaysInAMonth = this.getTotalNumOfDaysInMonth(year, month);
    const yearLength = year.toString().split("").length;

    if (day <= 0 || day > 31) {
      this.setErrorColor();
      this.customErrorMessage(
        this.dayErrorMsg,
        "Must be a valid day",
        "hsl(0, 100%, 67%)"
      );
    }
    if (month <= 0 || month > 12) {
      this.setErrorColor();
      this.customErrorMessage(
        this.monthErrorMsg,
        "Must be a valid month",
        "hsl(0, 100%, 67%)"
      );
    }

    if (yearLength !== 4) {
      this.setErrorColor();
      this.customErrorMessage(
        this.yearErrorMsg,
        "Must be a valid year",
        "hsl(0, 100%, 67%)"
      );
    }
    if (year > currentYear) {
      this.setErrorColor();
      this.customErrorMessage(
        this.yearErrorMsg,
        "Must be in the past",
        "hsl(0, 100%, 67%)"
      );
    }

    if (day > totalDaysInAMonth) {
      this.setErrorColor();
      this.customErrorMessage(
        this.dayErrorMsg,
        "Must be a valid date",
        "hsl(0, 100%, 67%)"
      );
    }
    if (day > currentDay && month === currentMonth && year === currentYear) {
      this.setErrorColor();
      this.customErrorMessage(
        this.dayErrorMsg,
        "Must be a valid day",
        "hsl(0, 100%, 67%)"
      );
    }

    if (month > currentMonth && year === currentYear) {
      this.setErrorColor();
      this.customErrorMessage(
        this.monthErrorMsg,
        "Must be a valid month",
        "hsl(0, 100%, 67%)"
      );
    }

    //calculate user's age
    this.calculateAge(day, month, year);
  }

  //! Calculate User's Age in Days, Months, and Years
  calculateAge(dd, mm, yy) {
    const birthDate = new Date(`${yy}-${mm}-${dd}`);
    const currentDate = new Date();

    const ageInMilliseconds = new Date(Date.now() - birthDate.getTime());

    const ageInYears = ageInMilliseconds.getFullYear() - 1970;
    const ageInMonths = ageInMilliseconds.getMonth();
    const ageInDays = ageInMilliseconds.getDate() - 1;

    //this.isLeapYear(yy, ageInDays);

    console.log(ageInYears, ageInMonths, ageInDays);
  }

  // ! Checks if a Year Is A Leap Year
  isLeapYear(year, days) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0)) {
    }
  }

  //! Return the Amount of Days In A Given month
  getTotalNumOfDaysInMonth(year, month) {
    const date = new Date(year, month, 0);
    return date.getDate();
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
