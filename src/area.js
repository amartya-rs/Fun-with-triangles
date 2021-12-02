var dimension = document.querySelectorAll("input");
var checkbutton = document.querySelector(".check-button");
var output = document.querySelector(".output");

checkbutton.addEventListener("click", clickHandler);

function clickHandler() {
  var area = 0.5 * Number(dimension[0].value) * Number(dimension[1].value);
  output.innerText = "Area of the triangle is " + area + "cm²";
}
