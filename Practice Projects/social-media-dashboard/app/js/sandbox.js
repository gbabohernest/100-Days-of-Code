const toggleButtons = document.querySelectorAll('input[name="theme"]');
const body = document.querySelector("body");
const dark = document.getElementById("dark");
const light = document.getElementById("light");

const applyColorThemeMode = (mode) => {
  if (mode === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
};

/*
  ? Get user choice from local storage if it exists
*/
const selectedMode = localStorage.getItem("selectedMode");
if (selectedMode) {
  const btn = document.getElementById(selectedMode);
  if (btn) {
    btn.checked = true;
    applyColorThemeMode(selectedMode);
  }
}

/*
  ? check user's preferred color scheme
  ? and toggle based on user's choice
*/
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDark) {
  dark.checked = true;
  applyColorThemeMode("dark");
} else {
  light.checked = true;
  applyColorThemeMode("light");
}

/*
 ! check which mode user selected ,
 ! set user choice in local storage
 ! and apply the theme
 */
toggleButtons.forEach((button) => {
  button.addEventListener("change", (e) => {
    const selectedMode = e.target.id;

    localStorage.setItem("selectedMode", selectedMode);

    applyColorThemeMode(selectedMode);
  });
});

/*
  ! listen for change in  user prefers-color-scheme 
  ! and apply the theme in real time.
*/
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const selectedMode = e.matches;
    if (selectedMode) {
      dark.checked = true;
      applyColorThemeMode("dark");
    } else {
      light.checked = true;
      applyColorThemeMode("light");
    }
  });
