const button = document.querySelector(".check-button");
const outputDiv = document.querySelector(".output");
const form = document.querySelector(".form-quiz");

const correctAnswers = ["90", "Right Angle"];


let onClickHandler = () => {
  let score = 0;
  let index = 0;

  let formDatas = new FormData(form);
  for(let value of formDatas.values()) {
    if (value == correctAnswers[index]) {
      score++
    }
    index++
  }

  outputDiv.innerText = `Your score is: ${score}`;
}


button.addEventListener("click", onClickHandler);
