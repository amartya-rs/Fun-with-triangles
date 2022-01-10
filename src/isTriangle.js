const inputAngle = document.querySelectorAll("input");
const checkbutton = document.querySelector(".check-button");
const output = document.querySelector(".output");


let clickHandler = () => {
  let sum = 0;
  for (let i = 0; i < inputAngle.length; i++) {
    sum = sum + Number(inputAngle[i].value);
  }
  if (sum === 180) {
    output.innerText = "Yayy, the angles form a triangle";
  } 
  else {
    output.innerText = "Oh no, the angles do not form a triangle";
  }
}

checkbutton.addEventListener("click", clickHandler);