const dimension = document.querySelectorAll("input");
const checkbutton = document.querySelector(".check-button");
const output = document.querySelector(".output");


let clickHandler = () => {
  const area = 0.5 * Number(dimension[0].value) * Number(dimension[1].value);
  output.innerText = `Area of the triangle is ${area} cm²`;
}

checkbutton.addEventListener("click", clickHandler);