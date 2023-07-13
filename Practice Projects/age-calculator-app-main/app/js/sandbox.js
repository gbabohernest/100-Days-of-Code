const customErrorMessage = () => {
  const dayError = document.querySelector("#ddErr");
  const monthError = document.querySelector("#mmErr");
  const yearError = document.querySelector("#yyErr");
};

const setErrorColor = () => {
  const labels = document.querySelectorAll("label");
  const errorSpan = document.querySelectorAll(".error");
  labels.forEach((label) => {
    label.style.color = "hsl(0, 100%, 67%)";
  });

  inputs.forEach((input) => {
    input.style.borderColor = "hsl(0, 100%, 67%)";
  });

  errorSpan.forEach((span) => {
    span.style.color = "hsl(0, 100%, 67%)";
    span.textContent = "This field is required";
  });
};

const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
//const day = document.querySelector("input[id=day]").value;
//const month = document.querySelector("input[id=month]").value;
//const year = document.querySelector("input[id=year]").value;
const values = [];

const validateInput = () => {
  inputs.forEach((input) => {
    input.value === "" ? setErrorColor() : values.push(input.value);
  });

  //const values = ([day, month, year] = values);
};

button.addEventListener("click", () => {
  validateInput();
});
