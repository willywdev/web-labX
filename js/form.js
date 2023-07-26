const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  createQuestionCard(data.userQuestion, data.userAnswer, data.userTags);
  form.reset();
});

function createQuestionCard(question, answer, tags) {
  // Creating DOM Elements
  const section = document.createElement("section");
  const bookmarkButton = document.createElement("button");
  const bookmarkImage = document.createElement("img");
  const questionHeadline = document.createElement("h2");
  const showAnswerButton = document.createElement("button");
  const answerText = document.createElement("p");
  const tagsList = document.createElement("ul");
  const tag1 = document.createElement("li");

  // Give Elements their Attributes
  section.classList.add("card");
  bookmarkButton.classList.add("card__bookmark-btn");
  bookmarkImage.classList.add("card__bookmark-img");
  bookmarkImage.src = "assets/bookmark-line.svg";
  questionHeadline.classList.add("card__question");
  showAnswerButton.classList.add("card__answer-btn");
  answerText.classList.add("card__answer", "hidden");
  tagsList.classList.add("card__list");
  tag1.classList.add("card__item");

  // Add Content to Elements
  questionHeadline.textContent = question;
  showAnswerButton.textContent = "Show Answer";
  answerText.textContent = answer;
  tag1.textContent = tags;

  // Append Elements to their Parent
  main.append(section);
  section.append(bookmarkButton);
  section.append(questionHeadline);
  section.append(showAnswerButton);
  section.append(answerText);
  section.append(tagsList);
  bookmarkButton.append(bookmarkImage);
  tagsList.append(tags);
}
