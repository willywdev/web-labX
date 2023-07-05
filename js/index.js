console.clear();
const body = document.querySelector("body");
const darkModeToggle = document.querySelector('[data-js="darkmode"]');
darkModeToggle.addEventListener("click", () => {
  if (darkModeToggle.checked === true) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
