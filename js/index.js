const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');
const bookmarkImage = document.querySelector('[data-js="bookmarkImage"]');

bookmarkButton.addEventListener("click", () => {
  if (bookmarkImage.src.includes("bookmark-fill.svg")) {
    bookmarkImage.src = "../assets/bookmark-line.svg";
  } else {
    bookmarkImage.src = "../assets/bookmark-fill.svg";
  }
});
