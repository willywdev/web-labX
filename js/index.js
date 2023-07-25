const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');
const bookmarkImage = document.querySelector('[data-js="bookmarkImage"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
const answerText = document.querySelector('[data-js="answerText"]');

bookmarkButton.addEventListener("click", () => {
  if (bookmarkImage.src.includes("bookmark-fill.svg")) {
    bookmarkImage.src = "../assets/bookmark-line.svg";
  } else {
    bookmarkImage.src = "../assets/bookmark-fill.svg";
  }
});
answerButton.addEventListener("click", () => {
  if (answerButton.textContent.includes("Show")) {
    answerButton.textContent = "Hide Answer";
  } else if (answerButton.textContent.includes("Hide")) {
    answerButton.textContent = "Show Answer";
  }
  answerText.classList.toggle("hidden");
});
