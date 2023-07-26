const bookmarkButton = document.querySelectorAll('[data-js="bookmarkButton"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
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

answerButton.addEventListener("click", () => {
  if (answerButton.textContent.includes("Show")) {
    answerButton.textContent = "Hide Answer";
    answerText.classList.add("text-focus-in");
  } else if (answerButton.textContent.includes("Hide")) {
    answerButton.textContent = "Show Answer";
    answerText.classList.remove("text-focus-in");
  }
  if (answerText.classList.contains("hidden")) {
    answerText.classList.toggle("hidden");
  } else {
    setTimeout(() => {
      answerText.classList.toggle("hidden");
    }, 200);
  }
});
