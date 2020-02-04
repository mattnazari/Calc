var butts = document.querySelector(".buttons");
var results = document.querySelector(".results");

function insertButtonValues(buttVal) {
  results.value = results.value + buttVal;
  console.log(buttVal)
}

function calculate() {
  var equation = results.value;
  if (equation) {
    results.value = eval(equation);
    console.log(equation + "=" + eval(equation));
  }
}

function clearResults() {
  results.value = "";
  console.log("results have been cleared");
}

function back() {
  var resValue = results.value;
  var resLength = resValue.length;
  results.value = resValue.substring(0, resLength - 1);
  console.log("You have pressed the back button");
}