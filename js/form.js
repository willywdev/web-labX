const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const characterCountQuestion = document.querySelector(
  '[data-js="charactersLeftQuestion"]'
);
const characterCountAnswer = document.querySelector(
  '[data-js="charactersLeftAnswer"]'
);
const textAreas = [form[0], form[1]];

// Updating TextAreas for User Input (Question & Answer) for every change
textAreas.forEach((input) => {
  updateCharacterCount(input);
  input.addEventListener("input", () => {
    updateCharacterCount(input);
  });
});

// Form Submit Event. Fires when Submit Button is pressed
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  createQuestionCard(data.userQuestion, data.userAnswer, data.userTags);
  form.reset();
  updateCharacterCount(form[0]);
  updateCharacterCount(form[1]);
});

// Create a new Question Card from the User Input (Question, Answer & Tags)
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
  tagsList.append(tag1);

  // Give section a margin
  main.style.marginBottom = "3.5rem";

  // Give the Buttons the same Functionality as in index.html
  bookmarkButton.addEventListener("click", () => {
    if (bookmarkImage.src.includes("bookmark-fill.svg")) {
      bookmarkImage.src = "assets/bookmark-line.svg";
    } else {
      bookmarkImage.src = "assets/bookmark-fill.svg";
    }
  });
  showAnswerButton.addEventListener("click", () => {
    if (showAnswerButton.textContent.includes("Show")) {
      showAnswerButton.textContent = "Hide Answer";
      showAnswerButton.nextElementSibling.classList.add("text-focus-in");
    } else if (showAnswerButton.textContent.includes("Hide")) {
      showAnswerButton.textContent = "Show Answer";
      showAnswerButton.nextElementSibling.classList.remove("text-focus-in");
    }
    if (showAnswerButton.nextElementSibling.classList.contains("hidden")) {
      showAnswerButton.nextElementSibling.classList.toggle("hidden");
      answerText.scrollIntoView();
    } else {
      setTimeout(() => {
        showAnswerButton.nextElementSibling.classList.toggle("hidden");
      }, 200);
    }
  });
  tagsList.scrollIntoView();
}

// Function to update the Character Count.
function updateCharacterCount(input) {
  if (input.name === "userQuestion") {
    const charactersLeftQuestion = input.maxLength - input.value.length;
    characterCountQuestion.textContent = `${charactersLeftQuestion} of ${input.maxLength} characters left`;
  } else if (input.name === "userAnswer") {
    const charactersLeftAnswer = input.maxLength - input.value.length;
    characterCountAnswer.textContent = `${charactersLeftAnswer} of ${input.maxLength} characters left`;
  }
}
