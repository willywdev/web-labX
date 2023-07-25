import { darkModeToggle, root } from "./localStorage.js";

darkModeToggle.addEventListener("click", () => {
  if (darkModeToggle.checked === true) {
    root.style.setProperty("--bg-color", "#000");
    localStorage.setItem("theme", "dark");
  } else {
    root.style.setProperty("--bg-color", "#fff");
    localStorage.setItem("theme", "light");
  }
});
