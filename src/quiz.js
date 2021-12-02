var button = document.querySelector(".check-button");
var outputDiv = document.querySelector(".output");
var form = document.querySelector(".form-quiz");

const correctAnswers = ["90", "Right Angled"];

function onClickHandler() {
  console.log("click");
}

button.addEventListener("click", onClickHandler);
