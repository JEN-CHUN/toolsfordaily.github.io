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
  result.innerHTML =("您的BMI指數為"+user_bmi);
  if (user_bmi<18.5) {
    warning.innerHTML=("您的體重過輕")
  }
  if (user_bmi>=18.5 && user_bmi <= 25) {
    warning.innerHTML=("您的體重正常")
  }
  if (user_bmi>25 && user_bmi <= 30) {
    warning.innerHTML=("您的體重過重")
  }
  if (user_bmi>30) {
    warning.innerHTML=("您的體重已經屬於肥胖等級")
  }
  suggestion.innerHTML=("詳細資訊請見下表")
}
else {
  result.innerHTML =("請輸入正確的身高或體重");
}
}
