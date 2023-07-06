const body = document.querySelector("body");
const calculatorHeader = document.querySelector("#cal-head");

const buttons = document.querySelectorAll("input[name='theme']");

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target;
    changeBg(target);
    console.log(target.className);
  });
});

function changeBg(theme) {
  if (theme.className === "2") {
    body.style.backgroundColor = "red";
  } else if (theme.className === "3") {
    body.style.backgroundColor = "green";
  } else {
    body.style.backgroundColor = "blue";
  }
}
