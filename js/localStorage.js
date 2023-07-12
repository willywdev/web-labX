export const root = document.documentElement;
export const darkModeToggle = document.querySelector('[data-js="darkmode"]');

const theme = localStorage.getItem("theme");
if (theme === "dark") {
  root.style.setProperty("--bg-color", "#252629");
  darkModeToggle.checked = true;
}
theme === "light" ? root.style.setProperty("--bg-color", "#fff") : "";
