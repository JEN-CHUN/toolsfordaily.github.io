var height
var weight
var user_bmi
var result = document.getElementById("result");
var warning = document.getElementById("warning");
var suggestion = document.getElementById("suggestion");

function bmi_calc() {

  height = document.getElementById("height").value;
  weight = document.getElementById("weight").value;

if (height > 0 && weight > 0) {
  user_bmi = parseFloat((weight/(height*height))).toFixed(2);
  result.innerHTML =("Your BMI is "+user_bmi);
  if (user_bmi<18.5) {
    warning.innerHTML=("Underweight")
  }
  if (user_bmi>=18.5 && user_bmi <= 25) {
    warning.innerHTML=("Normal &#40;Healthy Weight&#41;")
  }
  if (user_bmi>25 && user_bmi <= 30) {
    warning.innerHTML=("Overweight")
  }
  if (user_bmi>30) {
    warning.innerHTML=("Obese Class")
  }
  suggestion.innerHTML=("For further information, please look at the chart below.")
}
else {
  result.innerHTML =("Please enter the correct height or weight.");
}
}
