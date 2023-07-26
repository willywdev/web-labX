const bookmarkButton = document.querySelectorAll('[data-js="bookmarkButton"]');
const answerButton = document.querySelectorAll('[data-js="answerButton"]');
const answerText = document.querySelector('[data-js="answerText"]');

bookmarkButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.childNodes[1].src.includes("bookmark-fill.svg")) {
      button.childNodes[1].src = "assets/bookmark-line.svg";
    } else {
      button.childNodes[1].src = "assets/bookmark-fill.svg";
    }
  });
});
answerButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent.includes("Show")) {
      button.textContent = "Hide Answer";
      button.nextElementSibling.classList.add("text-focus-in");
    } else if (button.textContent.includes("Hide")) {
      button.textContent = "Show Answer";
      button.nextElementSibling.classList.remove("text-focus-in");
    }
    if (button.nextElementSibling.classList.contains("hidden")) {
      button.nextElementSibling.classList.toggle("hidden");
    } else {
      setTimeout(() => {
        button.nextElementSibling.classList.toggle("hidden");
      }, 200);
    }
  });
});
