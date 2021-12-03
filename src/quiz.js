var button = document.querySelector(".check-button");
var outputDiv = document.querySelector(".output");
var form = document.querySelector(".form-quiz");

const correctAnswers = ["90", "Right Angle"];


function onClickHandler() {
  var score = 0;
  var index = 0;

  var formDatas = new FormData(form);
  for(let value of formDatas.values()) {
    if (value == correctAnswers[index]) {
      score++
    }
    index++
  }

  outputDiv.innerText = "Your score is: " + score;
}


button.addEventListener("click", onClickHandler);
