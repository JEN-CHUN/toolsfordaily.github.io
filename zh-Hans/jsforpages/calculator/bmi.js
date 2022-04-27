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
  result.innerHTML =("您的BMI指数为"+user_bmi);
  if (user_bmi<18.5) {
    warning.innerHTML=("您的体重过轻")
  }
  if (user_bmi>=18.5 && user_bmi <= 25) {
    warning.innerHTML=("您的体重正常")
  }
  if (user_bmi>25 && user_bmi <= 30) {
    warning.innerHTML=("您的体重过重")
  }
  if (user_bmi>30) {
    warning.innerHTML=("您的体重已经属于肥胖等级")
  }
  suggestion.innerHTML=("详细资讯请见下表")
}
else {
  result.innerHTML =("请输入正确的身高或体重");
}
}
