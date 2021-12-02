var inputAngle = document.querySelectorAll("input");
var checkbutton = document.querySelector(".check-button");
var output = document.querySelector(".output");

checkbutton.addEventListener("click", clickHandler);

function clickHandler() {
  var sum = 0;
  for (var i = 0; i < inputAngle.length; i++) {
    sum = sum + Number(inputAngle[i].value);
  }
  if (sum === 180) {
    output.innerText = "Yayy, the angles form a triangle";
  } else {
    output.innerText = "Oh no, the angles do not form a triangle";
  }
}
