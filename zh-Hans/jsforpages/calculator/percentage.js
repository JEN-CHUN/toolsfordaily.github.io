var number_want_count;
var total;
var percentage_count;
var result;

function percentage_number() {
  number_want_count = document.getElementById("number_want_count").value;
  total = document.getElementById('total').value;
  percentage_count = document.getElementById("percentage_count")
  result = (number_want_count / total)*100;
  percentage_count.innerHTML = (result+"%")
}
