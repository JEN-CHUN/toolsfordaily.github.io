// document.getElementById("gram").value;
// parseInt(tons)*1000000;
var celsius;
var fahrenheit;
var rankine;
var kelvin;


function celsius_to_other() {
    var celsius = document.getElementById("celsius").value;
    // var kilogram = document.getElementById("kilogram").value;
    // var tons = document.getElementById("tons").value;
    // The function which takes the value of gram and calculate to other numbers
    // if (parseInt(celsius)) {
    //   fahrenheit = (parseInt(celsius)*9/5)+32;
    //   rankine = (parseInt(celsius)+273.15)*9/5;
    //   kelvin = (parseInt(celsius)+273.15);
    //   document.getElementById('fahrenheit').value = fahrenheit;
    //   document.getElementById('rankine').value = rankine;
    //   document.getElementById('kelvin').value = kelvin;
    // }
    if (parseFloat(celsius)) {
      fahrenheit = (((parseFloat(celsius)*9/5)+32)).toFixed(2);
      rankine = ((parseFloat(celsius)+273.15)*9/5).toFixed(2);
      kelvin = ((parseFloat(celsius))+273.15).toFixed(2);
      document.getElementById('fahrenheit').value = fahrenheit;
      document.getElementById('rankine').value = rankine;
      document.getElementById('kelvin').value = kelvin;
    }
    else {
      document.getElementById('fahrenheit').value = 0;
      document.getElementById('rankine').value = 0;
      document.getElementById('kelvin').value = 0;
    }
}

function fahrenheit_to_other() {
  var fahrenheit = document.getElementById("fahrenheit").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(fahrenheit)) {
  //   celsius = (parseInt(fahrenheit)-32)*5/9;
  //   rankine = parseInt(fahrenheit)+459.67;
  //   kelvin = (parseInt(fahrenheit)+459.67)*5/9;
  //   document.getElementById('celsius').value = celsius;
  //   document.getElementById('rankine').value = rankine;
  //   document.getElementById('kelvin').value = kelvin;
  //
  // }
  if (parseFloat(fahrenheit)) {
    celsius = ((parseFloat(fahrenheit)-32)*5/9).toFixed(2);
    rankine = ((parseFloat(fahrenheit))+459.67).toFixed(2);
    kelvin = ((parseFloat(fahrenheit))+459.67).toFixed(2);
    document.getElementById('celsius').value = celsius;
    document.getElementById('rankine').value = rankine;
    document.getElementById('kelvin').value = kelvin;
  }
  else {
    document.getElementById('celsius').value = 0;
    document.getElementById('rankine').value = 0;
    document.getElementById('kelvin').value = 0;
  }
}


function rankine_to_other() {
  var rankine = document.getElementById("rankine").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(rankine)) {
  //   celsius = (parseInt(rankine)-491.67)*5/9;
  //   fahrenheit = parseInt(rankine)-459.67;
  //   kelvin = parseInt(rankine)*5/9;
  //   document.getElementById('celsius').value = celsius;
  //   document.getElementById('fahrenheit').value = fahrenheit;
  //   document.getElementById('kelvin').value = kelvin;
  // }
  if (parseFloat(rankine)) {
    celsius = ((parseFloat(rankine)-491.67)*5/9).toFixed(2);
    fahrenheit = ((parseFloat(rankine))-459.67).toFixed(2);
    kelvin = ((parseFloat(rankine)*5/9)).toFixed(2);
    document.getElementById('celsius').value = celsius;
    document.getElementById('fahrenheit').value = fahrenheit;
    document.getElementById('kelvin').value = kelvin;
  }
  else {
    document.getElementById('celsius').value = 0;
    document.getElementById('fahrenheit').value = 0;
    document.getElementById('kelvin').value = 0;
  }
}

function kelvin_to_other() {
  var kelvin = document.getElementById("kelvin").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(kelvin)) {
  //   celsius = parseInt(kelvin)-273.15;
  //   fahrenheit = (parseInt(kelvin)*9/5)-459.67;
  //   rankine = parseInt(kelvin)*9/5;
  //   document.getElementById('celsius').value = celsius;
  //   document.getElementById('fahrenheit').value = fahrenheit;
  //   document.getElementById('rankine').value = rankine;
  // }
  if (parseFloat(kelvin)) {
    celsius = ((parseFloat(kelvin)-273.15)).toFixed(2);
    fahrenheit = ((parseFloat(kelvin)*9/5)-459.67).toFixed(2);
    rankine = (parseFloat(kelvin)*9/5).toFixed(2);
    document.getElementById('celsius').value = celsius;
    document.getElementById('fahrenheit').value = fahrenheit;
    document.getElementById('rankine').value = rankine;
  }
  else {
    document.getElementById('celsius').value = 0;
    document.getElementById('fahrenheit').value = 0;
    document.getElementById('rankine').value = 0;
  }
}
