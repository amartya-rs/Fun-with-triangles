const inputSides = document.querySelectorAll("input");
const checkbutton = document.querySelector(".check-button");
const output = document.querySelector(".output");



let clickHandler = () => { 
  let array = [""];
  for (let i = 0; i < inputSides.length; i++) {
    array[i] = Number(inputSides[i].value);
  }

  result(array);
}

let result = array => {
  const side1 = Math.pow(array[0], 2);
  const side2 = Math.pow(array[1], 2);
  output.innerText = `Length of hypotenuse is ${Math.sqrt(side1 + side2)} cm`;
}

checkbutton.addEventListener("click", clickHandler); //code works even if we move this line above result function. Understand the flow of code.
