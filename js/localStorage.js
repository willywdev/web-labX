export const root = document.documentElement;
export const darkModeToggle = document.querySelector('[data-js="darkmode"]');
const theme = localStorage.getItem("theme");
if (theme === "dark") {
  root.style.setProperty("--bg-color", "#0f0e17");
  root.style.setProperty("--secondary-color", "#F5f5f4");
  root.style.setProperty("--headline-color", "#0f0e17");
  root.style.setProperty("--paragraph-color", "#0f0e17");
  root.style.setProperty("--dark-bg-color", "#F5f5f4");

  darkModeToggle.checked = true;
}
theme === "light" ? root.style.setProperty("--bg-color", "#F5f5f4") : "";
