const body = document.querySelector("body");
const calculatorHeader = document.querySelector("#cal-head");

const buttons = document.querySelectorAll("input[name='theme']");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target;
    selectTheme(target);
  });
});

const selectTheme = (themeBtn) => {
  if (themeBtn.className === "2") {
    if (
      calculatorHeader.classList.contains("theme-3") ||
      calculatorHeader.classList.contains("theme-1")
    ) {
      calculatorHeader.classList.remove("theme-3");
      calculatorHeader.classList.remove("theme-1");
      calculatorHeader.classList.add("theme-2");
      body.style.backgroundColor = "hsl(0, 0%, 90%)";
    }
  }

  if (themeBtn.className === "3") {
    if (
      calculatorHeader.classList.contains("theme-1") ||
      calculatorHeader.classList.contains("theme-2")
    ) {
      calculatorHeader.classList.remove("theme-1");
      calculatorHeader.classList.remove("theme-2");
      calculatorHeader.classList.add("theme-3");
      body.style.backgroundColor = "hsl(268, 75%, 9%)";
    }
  }
  if (themeBtn.className === "1") {
    if (
      calculatorHeader.classList.contains("theme-2") ||
      calculatorHeader.classList.contains("theme-3")
    ) {
      calculatorHeader.classList.remove("theme-2");
      calculatorHeader.classList.remove("theme-3");
      calculatorHeader.classList.add("theme-1");
      body.style.backgroundColor = "hsl(222, 26%, 31%)";
    }
  }
};
