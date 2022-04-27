// document.getElementById("gram").value;
// parseInt(tons)*1000000;
var milliliter;
var liter;
var pint;
var quart;
var gallon;
var us_fluid_ounce;


function milliliter_to_other() {
    var milliliter = document.getElementById("milliliter").value;
    // var kilogram = document.getElementById("kilogram").value;
    // var tons = document.getElementById("tons").value;
    // The function which takes the value of gram and calculate to other numbers
    // if (parseInt(milliliter)) {
    //   liter = parseInt(milliliter)*1000;
    //   pint = parseInt(milliliter)*0.00211337642;
    //   quart = parseInt(milliliter)*0.00105668821;
    //   gallon = parseInt(milliliter)*0.000264172052;
    //   us_fluid_ounce = parseInt(milliliter)*0.033814022701843;
    //   document.getElementById('liter').value = liter;
    //   document.getElementById('pint').value = pint;
    //   document.getElementById('quart').value = quart;
    //   document.getElementById('gallon').value = gallon;
    //   document.getElementById('us_fluid_ounce').value = us_fluid_ounce;
    //
    // }
    if (parseFloat(milliliter)) {
      liter = (parseFloat(milliliter))*1000;
      pint = (parseFloat(milliliter))*0.00211337642;
      quart = (parseFloat(milliliter))*0.00105668821;
      gallon = (parseFloat(milliliter))*0.000264172052;
      us_fluid_ounce = (parseFloat(milliliter))*0.033814022701843;
      document.getElementById('liter').value = liter;
      document.getElementById('pint').value = pint;
      document.getElementById('quart').value = quart;
      document.getElementById('gallon').value = gallon;
      document.getElementById('us_fluid_ounce').value = us_fluid_ounce;
    }
    else {
      document.getElementById('liter').value = 0;
      document.getElementById('pint').value = 0;
      document.getElementById('quart').value = 0;
      document.getElementById('gallon').value = 0;
      document.getElementById('us_fluid_ounce').value = 0;
    }
}

function liter_to_other() {
  var liter = document.getElementById("liter").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(liter)) {
  //   milliliter = parseInt(liter)*0.001;
  //   pint = parseInt(liter)*2.11337642;
  //   quart = parseInt(liter)*1.05668821;
  //   gallon = parseInt(liter)*0.264172052;
  //   us_fluid_ounce = parseInt(liter)*33.814022701843;
  //   document.getElementById('milliliter').value = milliliter;
  //   document.getElementById('pint').value = pint;
  //   document.getElementById('quart').value = quart;
  //   document.getElementById('gallon').value = gallon;
  //   document.getElementById('us_fluid_ounce').value = us_fluid_ounce;
  // }
  if (parseFloat(liter)) {
    milliliter = (parseFloat(liter)*0.001).toFixed(5);
    pint = (parseFloat(liter)*2.11337642).toFixed(5);
    quart = (parseFloat(liter)*1.05668821).toFixed(5);
    gallon = (parseFloat(liter)*0.264172052).toFixed(5);
    us_fluid_ounce = (parseFloat(liter)*33.814022701843).toFixed(5);
    document.getElementById('milliliter').value = milliliter;
    document.getElementById('pint').value = pint;
    document.getElementById('quart').value = quart;
    document.getElementById('gallon').value = gallon;
    document.getElementById('us_fluid_ounce').value = us_fluid_ounce;
  }
  else {
    document.getElementById('milliliter').value = 0;
    document.getElementById('pint').value = 0;
    document.getElementById('quart').value = 0;
    document.getElementById('gallon').value = 0;
    document.getElementById('us_fluid_ounce').value = 0;
  }
}


function pint_to_other() {
  var pint = document.getElementById("pint").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(pint)) {
  //   milliliter = parseInt(pint)*473.1764731;
  //   liter = parseInt(pint)*0.473176473;
  //   quart = parseInt(pint)*0.5;
  //   gallon = parseInt(pint)*0.125;
  //   us_fluid_ounce = parseInt(pint)*16;
  //   document.getElementById('milliliter').value = milliliter;
  //   document.getElementById('liter').value = liter;
  //   document.getElementById('quart').value = quart;
  //   document.getElementById('gallon').value = gallon;
  //   document.getElementById('us_fluid_ounce').value = us_fluid_ounce;
  // }
   if (parseFloat(pint)) {
    milliliter = (parseFloat(pint)*473.1764731).toFixed(5);
    liter = (parseFloat(pint)*0.473176473).toFixed(5);
    quart = (parseFloat(pint)*0.5).toFixed(5);
    gallon = (parseFloat(pint)*0.125).toFixed(5);
    us_fluid_ounce = (parseFloat(pint)*16).toFixed(5);
    document.getElementById('milliliter').value = milliliter;
    document.getElementById('liter').value = liter;
    document.getElementById('quart').value = quart;
    document.getElementById('gallon').value = gallon;
    document.getElementById('us_fluid_ounce').value = us_fluid_ounce;
  }
  else {
    document.getElementById('milliliter').value = 0;
    document.getElementById('liter').value = 0;
    document.getElementById('quart').value = 0;
    document.getElementById('gallon').value = 0;
    document.getElementById('us_fluid_ounce').value = 0;
  }
}

function quart_to_other() {
  var quart = document.getElementById("quart").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(quart)) {
  //   milliliter = parseInt(quart)*946.352946;
  //   liter = parseInt(quart)*0.946352946;
  //   pint = parseInt(quart)*2;
  //   gallon = parseInt(quart)*0.25;
  //   us_fluid_ounce = parseInt(quart)*32;
  //
  //   document.getElementById('milliliter').value = milliliter;
  //   document.getElementById('liter').value = liter;
  //   document.getElementById('pint').value = pint;
  //   document.getElementById('gallon').value = gallon;
  //   document.getElementById('us_fluid_ounce').value = us_fluid_ounce;
  //
  // }
  if (parseFloat(quart)) {
    milliliter = (parseFloat(quart)*946.352946).toFixed(5);
    liter = (parseFloat(quart)*0.946352946).toFixed(5);
    pint = (parseFloat(quart)*2).toFixed(5);
    gallon = (parseFloat(quart)*0.25).toFixed(5);
    us_fluid_ounce = (parseFloat(quart)*32).toFixed(5);
    document.getElementById('milliliter').value = milliliter;
    document.getElementById('liter').value = liter;
    document.getElementById('pint').value = pint;
    document.getElementById('gallon').value = gallon;
    document.getElementById('us_fluid_ounce').value = us_fluid_ounce;

  }
  else {
    document.getElementById('milliliter').value = 0;
    document.getElementById('liter').value = 0;
    document.getElementById('pint').value = 0;
    document.getElementById('gallon').value = 0;
    document.getElementById('us_fluid_ounce').value = 0;
  }
}

function gallon_to_other() {
  var gallon = document.getElementById("gallon").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(gallon)) {
  //   milliliter = parseInt(gallon)*3785.412;
  //   liter = parseInt(gallon)*3.785412;
  //   pint = parseInt(gallon)*8;
  //   quart = parseInt(gallon)*4;
  //   us_fluid_ounce = parseInt(gallon)*128;
  //   document.getElementById('milliliter').value = milliliter;
  //   document.getElementById('liter').value = liter;
  //   document.getElementById('quart').value = quart;
  //   document.getElementById('gallon').value = gallon;
  //   document.getElementById('us_fluid_ounce').value = us_fluid_ounce;
  // }
  if (parseFloat(gallon)) {
    milliliter = (parseFloat(gallon)*3785.412).toFixed(5);
    liter = (parseFloat(gallon)*3.785412).toFixed(5);
    pint = (parseFloat(gallon)*8).toFixed(5);
    quart = (parseFloat(gallon)*4).toFixed(5);
    us_fluid_ounce = (parseFloat(gallon)*128).toFixed(5);
    document.getElementById('milliliter').value = milliliter;
    document.getElementById('liter').value = liter;
    document.getElementById('pint').value = pint;
    document.getElementById('quart').value = quart;
    document.getElementById('us_fluid_ounce').value = us_fluid_ounce;
  }
  else {
    document.getElementById('milliliter').value = 0;
    document.getElementById('liter').value = 0;
    document.getElementById('pint').value = 0;
    document.getElementById('quart').value = 0;
    document.getElementById('us_fluid_ounce').value = 0;
  }
}

function us_fluid_ounce_to_other() {
  var us_fluid_ounce = document.getElementById("us_fluid_ounce").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(us_fluid_ounce)) {
  //   milliliter = parseInt(us_fluid_ounce)*29.573529562;
  //   liter = parseInt(us_fluid_ounce)*0.029573529562;
  //   pint = parseInt(us_fluid_ounce)*0.0625;
  //   quart = parseInt(us_fluid_ounce)*0.03125;
  //   gallon = parseInt(us_fluid_ounce)*0.0078125;
  //   document.getElementById('milliliter').value = milliliter;
  //   document.getElementById('liter').value = liter;
  //   document.getElementById('pint').value = pint;
  //   document.getElementById('quart').value = quart;
  //   document.getElementById('gallon').value = gallon;
  // }
  if (parseFloat(us_fluid_ounce)) {
    milliliter = (parseFloat(us_fluid_ounce)*29.573529562).toFixed(5);
    liter = (parseFloat(us_fluid_ounce)*0.029573529562).toFixed(5);
    pint = (parseFloat(us_fluid_ounce)*0.0625).toFixed(5);
    quart = (parseFloat(us_fluid_ounce)*0.03125).toFixed(5);
    gallon = (parseFloat(us_fluid_ounce)*0.0078125).toFixed(5);
    document.getElementById('milliliter').value = milliliter;
    document.getElementById('liter').value = liter;
    document.getElementById('pint').value = pint;
    document.getElementById('quart').value = quart;
    document.getElementById('gallon').value = gallon;
  }
  else {
    document.getElementById('milliliter').value = 0;
    document.getElementById('liter').value = 0;
    document.getElementById('pint').value = 0;
    document.getElementById('quart').value = 0;
    document.getElementById('gallon').value = 0;
  }
}
