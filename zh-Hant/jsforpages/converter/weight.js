// document.getElementById("gram").value;
// parseInt(tons)*1000000;
var gram;
var kilogram;
var tons;
var ounce;
var pound;


function gram_to_other() {
    var gram = document.getElementById("gram").value;
    // var kilogram = document.getElementById("kilogram").value;
    // var tons = document.getElementById("tons").value;
    // The function which takes the value of gram and calculate to other numbers
    // if (parseInt(gram)) {
    //   kilogram = parseInt(gram)*0.001;
    //   tons = parseInt(gram)*0.000001;
    //   ounce = parseInt(gram)*0.0352739619;
    //   pound = parseInt(gram)*0.00220462262;
    //   document.getElementById('kilogram').value = kilogram;
    //   document.getElementById('tons').value = tons;
    //   document.getElementById('ounce').value = ounce;
    //   document.getElementById('pound').value = pound;
    // }
    if (parseFloat(gram)) {
      kilogram = (parseFloat(gram)*0.001).toFixed(8);
      tons = (parseFloat(gram)*0.000001).toFixed(8);
      ounce = (parseFloat(gram)*0.0352739619).toFixed(8);
      pound = (parseFloat(gram)*0.00220462262).toFixed(8);
      document.getElementById('kilogram').value = kilogram;
      document.getElementById('tons').value = tons;
      document.getElementById('ounce').value = ounce;
      document.getElementById('pound').value = pound;
    }
    else {
      document.getElementById('kilogram').value = 0;
      document.getElementById('tons').value = 0;
      document.getElementById('ounce').value = 0;
      document.getElementById('pound').value = 0;
    }
}

function kilogram_to_other() {
  var kilogram = document.getElementById("kilogram").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(kilogram)) {
  //   gram = parseInt(kilogram)*1000;
  //   tons = parseInt(kilogram)*0.001;
  //   ounce = parseInt(kilogram)*35.2739619;
  //   pound = parseInt(kilogram)*2.20462262;
  //   document.getElementById('gram').value = gram;
  //   document.getElementById('tons').value = tons;
  //   document.getElementById('ounce').value = ounce;
  //   document.getElementById('pound').value = pound;
  // }
  if (parseFloat(kilogram)) {
    gram = (parseFloat(kilogram)*0.001).toFixed(8);
    tons = (parseFloat(kilogram)*0.001).toFixed(8);
    ounce = (parseFloat(kilogram)*35.2739619).toFixed(8);
    pound = (parseFloat(kilogram)*2.20462262).toFixed(8);
    document.getElementById('gram').value = gram;
    document.getElementById('tons').value = tons;
    document.getElementById('ounce').value = ounce;
    document.getElementById('pound').value = pound;
  }
  else {
    document.getElementById('gram').value = 0;
    document.getElementById('tons').value = 0;
    document.getElementById('ounce').value = 0;
    document.getElementById('pound').value = 0;
  }
}


function tons_to_other() {
  var tons = document.getElementById("tons").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(tons)) {
  //   gram = parseInt(tons)*1000000;
  //   kilogram = parseInt(tons)*1000;
  //   ounce = parseInt(tons)*35273.9619;
  //   pound = parseInt(tons)*2204.62262;
  //   document.getElementById('gram').value = gram;
  //   document.getElementById('kilogram').value = kilogram;
  //   document.getElementById('ounce').value = ounce;
  //   document.getElementById('pound').value = pound;
  // }
  if (parseFloat(tons)) {
    gram = (parseFloat(tons)*1000000).toFixed(8);
    kilogram = (parseFloat(tons)*1000).toFixed(8);
    ounce = (parseFloat(tons)*35273.9619).toFixed(8);
    pound = (parseFloat(tons)*2204.62262).toFixed(8);
    document.getElementById('gram').value = gram;
    document.getElementById('kilogram').value = kilogram;
    document.getElementById('ounce').value = ounce;
    document.getElementById('pound').value = pound;
  }
  else {
    document.getElementById('gram').value = 0;
    document.getElementById('kilogram').value = 0;
    document.getElementById('ounce').value = 0;
    document.getElementById('pound').value = 0;
  }
}

function ounce_to_other() {
  var ounce = document.getElementById("ounce").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(ounce)) {
  //   gram = parseInt(ounce)*28.3495231;
  //   kilogram = parseInt(ounce)*0.0283495231;
  //   tons = parseInt(ounce)*0.0000283495231;
  //   pound = parseInt(ounce)*0.0625;
  //   document.getElementById('gram').value = gram;
  //   document.getElementById('kilogram').value = kilogram;
  //   document.getElementById('tons').value = tons;
  //   document.getElementById('pound').value = pound;
  // }
  if (parseFloat(ounce)) {
    gram = (parseFloat(ounce)*28.3495231).toFixed(8);
    kilogram = (parseFloat(ounce)*0.0283495231).toFixed(8);
    tons = (parseFloat(ounce)*0.0000283495231).toFixed(8);
    pound = (parseFloat(ounce)*0.0625).toFixed(8);
    document.getElementById('gram').value = gram;
    document.getElementById('kilogram').value = kilogram;
    document.getElementById('tons').value = tons;
    document.getElementById('pound').value = pound;
  }
  else {
    document.getElementById('gram').value = 0;
    document.getElementById('kilogram').value = 0;
    document.getElementById('tons').value = 0;
    document.getElementById('pound').value = 0;
  }
}

function pound_to_other() {
  var pound = document.getElementById("pound").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(gram)) {
  //   gram = parseInt(pound)*453.59237;
  //   kilogram = parseInt(pound)*0.45359237;
  //   tons = parseInt(pound)*0.00045359237;
  //   ounce = parseInt(pound)*16;
  //   document.getElementById('gram').value = gram;
  //   document.getElementById('kilogram').value = kilogram;
  //   document.getElementById('tons').value = tons;
  //   document.getElementById('ounce').value = ounce;
  // }
  if (parseFloat(pound)) {
    gram = (parseFloat(pound)*453.59237).toFixed(8);
    kilogram = (parseFloat(pound)*0.45359237).toFixed(8);
    tons = (parseFloat(pound)*0.00045359237).toFixed(8);
    ounce = (parseFloat(pound)*16).toFixed(8);
    document.getElementById('gram').value = gram;
    document.getElementById('kilogram').value = kilogram;
    document.getElementById('tons').value = tons;
    document.getElementById('ounce').value = ounce;
  }
  else {
    document.getElementById('gram').value = 0;
    document.getElementById('kilogram').value = 0;
    document.getElementById('tons').value = 0;
    document.getElementById('ounce').value = 0;
  }
}
