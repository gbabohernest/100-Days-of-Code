const toggleBtns = document.querySelectorAll('input[name="theme"]');
const body = document.querySelector("body");
const dark = document.getElementById("dark");
const light = document.getElementById("light");

const selectedMode = localStorage.getItem("selectedMode");
const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const applyColorThemeMode = (mode) => {
  if (mode === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
};

if (selectedMode) {
  const toggleBtnID = document.getElementById(selectedMode);
  if (toggleBtnID) {
    toggleBtnID.checked = true;
    applyColorThemeMode(selectedMode);
  }
}

if (darkMode) {
  dark.checked = true;
  applyColorThemeMode("dark");
} else {
  light.checked = true;
  applyColorThemeMode("light");
}

toggleBtns.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    const selectedMode = e.target.id;
    localStorage.setItem("selectedMode", selectedMode);
    applyColorThemeMode(selectedMode);
  });
});

const colorSchemeChange = (e) => {
  const darkMode = e.matches;
  if (darkMode) {
    dark.checked = true;
    applyColorThemeMode("dark");
  } else {
    light.checked = true;
    applyColorThemeMode("light");
    l;
  }
};
window
  .matchMedia("prefers-color-scheme: dark")
  .addEventListener("change", colorSchemeChange);
/*
const setModeBaseOnColorScheme = () => {
  if (darkMode) {
    dark.checked = true;
    applyColorThemeMode("dark");
  } else {
    light.checked = true;
    applyColorThemeMode("light");
  }
};
*/
const setMode = (toggleBtns) => {
  toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEvenListener("change", (e) => {
      const selectedMode = e.target.id;
      localStorage.setItem("selectedMode", selectedMode);
    });

    applyColorThemeMode(selectedMode);
  });
};

/*
const getMode = (selectedMode) => {
  if (selectedMode === "light") {
    const id = document.getElementById(selectedMode);
    if (id) {
      id.checked = true;
      applyColorThemeMode(selectedMode);
    }
  }
};

function prefersColorSchemeChange(e) {
  const prefersDark = e.matches;
  if (prefersDark) {
    dark = true;
    applyColorThemeMode("dark");
  } else {
    light = true;
    applyColorThemeMode("light");
  }
}

window.matchMedia = "(prefers-color-scheme: dark".addEvenListener(
  "change",
  prefersColorSchemeChange
);

setMode(toggleBtns);
getMode(selectedMode);
*/
