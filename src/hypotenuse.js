var inputSides = document.querySelectorAll("input");
var checkbutton = document.querySelector(".check-button");
var output = document.querySelector(".output");

checkbutton.addEventListener("click", clickHandler);

function clickHandler() {
  var array = [""];
  for (var i = 0; i < inputSides.length; i++) {
    array[i] = Number(inputSides[i].value);
  }

  result(array);
}

function result(array) {
  var side1 = Math.pow(array[0], 2);
  var side2 = Math.pow(array[1], 2);
  output.innerText =
    "Length of hypotenuse is " + Math.sqrt(side1 + side2) + " cm";
}
