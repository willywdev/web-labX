const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  form.reset();
});

function createQuestionCard(question, answer, tags) {}
