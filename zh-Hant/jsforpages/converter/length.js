// document.getElementById("gram").value;
// parseInt(tons)*1000000;
var kilometer;
var meter;
var decimeter;
var centimeter;
var millimeter;
var inch;
var foot;
var yard;


function kilometer_to_other() {
    var kilometer = document.getElementById("kilometer").value;
    // var kilogram = document.getElementById("kilogram").value;
    // var tons = document.getElementById("tons").value;
    // The function which takes the value of gram and calculate to other numbers
    // if (parseInt(kilometer)) {
    //   meter = parseInt(kilometer)*1000;
    //   decimeter = parseInt(kilometer)*10000;
    //   centimeter = parseInt(kilometer)*100000;
    //   millimeter = parseInt(kilometer)*1000000;
    //   inch = parseInt(kilometer)*39370.1;
    //   foot = parseInt(kilometer)*3280.84;
    //   yard = parseInt(kilometer)*1093.61;
    //   document.getElementById('meter').value = meter;
    //   document.getElementById('decimeter').value = decimeter;
    //   document.getElementById('centimeter').value = centimeter;
    //   document.getElementById('millimeter').value = millimeter;
    //   document.getElementById('inch').value = inch;
    //   document.getElementById('foot').value = foot;
    //   document.getElementById('yard').value = yard;
    // }
    if (parseFloat(kilometer)) {
      meter = (parseFloat(kilometer))*1000;
      decimeter = (parseFloat(kilometer))*10000;
      centimeter = (parseFloat(kilometer))*100000;
      millimeter = (parseFloat(kilometer))*1000000;
      inch = (parseFloat(kilometer))*39370.1;
      foot = (parseFloat(kilometer))*3280.84;
      yard = (parseFloat(kilometer))*1093.61;
      document.getElementById('meter').value = meter;
      document.getElementById('decimeter').value = decimeter;
      document.getElementById('centimeter').value = centimeter;
      document.getElementById('millimeter').value = millimeter;
      document.getElementById('inch').value = inch;
      document.getElementById('foot').value = foot;
      document.getElementById('yard').value = yard;
    }
    else {
      document.getElementById('meter').value = 0;
      document.getElementById('decimeter').value = 0;
      document.getElementById('centimeter').value = 0;
      document.getElementById('millimeter').value = 0;
      document.getElementById('inch').value = 0;
      document.getElementById('foot').value = 0;
      document.getElementById('yard').value = 0;
    }
}

function meter_to_other() {
  var meter = document.getElementById("meter").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(meter)) {
  //   kilometer = parseInt(meter)*0.001;
  //   decimeter = parseInt(meter)*10;
  //   centimeter = parseInt(meter)*100;
  //   millimeter = parseInt(meter)*10000;
  //   inch = parseInt(meter)*39.3701;
  //   foot = parseInt(meter)*3.28084;
  //   yard = parseInt(meter)*1.09361;
  //   document.getElementById('kilometer').value = kilometer;
  //   document.getElementById('decimeter').value = decimeter;
  //   document.getElementById('centimeter').value = centimeter;
  //   document.getElementById('millimeter').value = millimeter;
  //   document.getElementById('inch').value = inch;
  //   document.getElementById('foot').value = foot;
  //   document.getElementById('yard').value = yard;
  // }
  if (parseFloat(meter)) {
    kilometer = (parseFloat(meter)*0.001).toFixed(6);
    decimeter = (parseFloat(meter)*10).toFixed(6);
    centimeter = (parseFloat(meter)*100).toFixed(6);
    millimeter = (parseFloat(meter)*10000).toFixed(6);
    inch = (parseFloat(meter)*39.3701).toFixed(6);
    foot = (parseFloat(meter)*3.28084).toFixed(6);
    yard = (parseFloat(meter)*1.09361).toFixed(6);
    document.getElementById('kilometer').value = kilometer;
    document.getElementById('decimeter').value = decimeter;
    document.getElementById('centimeter').value = centimeter;
    document.getElementById('millimeter').value = millimeter;
    document.getElementById('inch').value = inch;
    document.getElementById('foot').value = foot;
    document.getElementById('yard').value = yard;
  }
  else {
    document.getElementById('kilometer').value = 0;
    document.getElementById('decimeter').value = 0;
    document.getElementById('centimeter').value = 0;
    document.getElementById('millimeter').value = 0;
    document.getElementById('inch').value = 0;
    document.getElementById('foot').value = 0;
    document.getElementById('yard').value = 0;
  }
}


function decimeter_to_other() {
  var decimeter = document.getElementById("decimeter").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(decimeter)) {
  //   kilometer = parseInt(decimeter)*0.0001;
  //   meter = parseInt(decimeter)*0.1;
  //   centimeter = parseInt(decimeter)*10;
  //   millimeter = parseInt(decimeter)*100;
  //   inch = parseInt(decimeter)*3.9370079;
  //   foot = parseInt(decimeter)*0.328084;
  //   yard = parseInt(decimeter)*0.1093613;
  //   document.getElementById('kilometer').value = kilometer;
  //   document.getElementById('meter').value = meter;
  //   document.getElementById('centimeter').value = centimeter;
  //   document.getElementById('millimeter').value = millimeter;
  //   document.getElementById('inch').value = inch;
  //   document.getElementById('foot').value = foot;
  //   document.getElementById('yard').value = yard;
  // }
  if (parseFloat(decimeter)) {
    kilometer = (parseFloat(decimeter)*0.0001).toFixed(6);
    meter = (parseFloat(decimeter)*0.1).toFixed(6);
    centimeter = (parseFloat(decimeter)*10).toFixed(6);
    millimeter = (parseFloat(decimeter)*100).toFixed(6);
    inch = (parseFloat(decimeter)*3.9370079).toFixed(6);
    foot = (parseFloat(decimeter)*0.328084).toFixed(6);
    yard = (parseFloat(decimeter)*0.1093613).toFixed(6);
    document.getElementById('kilometer').value = kilometer;
    document.getElementById('meter').value = meter;
    document.getElementById('centimeter').value = centimeter;
    document.getElementById('millimeter').value = millimeter;
    document.getElementById('inch').value = inch;
    document.getElementById('foot').value = foot;
    document.getElementById('yard').value = yard;
  }
  else {
    document.getElementById('kilometer').value = 0;
    document.getElementById('meter').value = 0;
    document.getElementById('centimeter').value = 0;
    document.getElementById('millimeter').value = 0;
    document.getElementById('inch').value = 0;
    document.getElementById('foot').value = 0;
    document.getElementById('yard').value = 0;
  }
}

function centimeter_to_other() {
  var centimeter = document.getElementById("centimeter").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(centimeter)) {
  //   kilometer = parseInt(centimeter)*0.00001;
  //   meter = parseInt(centimeter)*0.01;
  //   decimeter = parseInt(centimeter)*	0.1;
  //   millimeter = parseInt(centimeter)*10;
  //   inch = parseInt(centimeter)*0.3937008;
  //   foot = parseInt(centimeter)*0.0328084;
  //   yard = parseInt(centimeter)*0.0109361;
  //   document.getElementById('kilometer').value = kilometer;
  //   document.getElementById('meter').value = meter;
  //   document.getElementById('decimeter').value = decimeter;
  //   document.getElementById('millimeter').value = millimeter;
  //   document.getElementById('inch').value = inch;
  //   document.getElementById('foot').value = foot;
  //   document.getElementById('yard').value = yard;
  // }
  if (parseFloat(centimeter)) {
    kilometer = (parseFloat(centimeter)*0.00001).toFixed(6);
    meter = (parseFloat(centimeter)*0.01).toFixed(6);
    decimeter = (parseFloat(centimeter)*0.1).toFixed(6);
    millimeter = (parseFloat(centimeter)*10).toFixed(6);
    inch = (parseFloat(centimeter)*0.3937008).toFixed(6);
    foot = (parseFloat(centimeter)*0.0328084).toFixed(6);
    yard = (parseFloat(centimeter)*0.0109361).toFixed(6);
    document.getElementById('kilometer').value = kilometer;
    document.getElementById('meter').value = meter;
    document.getElementById('decimeter').value = decimeter;
    document.getElementById('millimeter').value = millimeter;
    document.getElementById('inch').value = inch;
    document.getElementById('foot').value = foot;
    document.getElementById('yard').value = yard;
  }
  else {
    document.getElementById('kilometer').value = 0;
    document.getElementById('meter').value = 0;
    document.getElementById('decimeter').value = 0;
    document.getElementById('millimeter').value = 0;
    document.getElementById('inch').value = 0;
    document.getElementById('foot').value = 0;
    document.getElementById('yard').value = 0;
  }
}

function millimeter_to_other() {
  var millimeter = document.getElementById("millimeter").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(millimeter)) {
  //   kilometer = parseInt(millimeter)*0.000001;
  //   meter = parseInt(millimeter)*0.001;
  //   decimeter = parseInt(millimeter)*0.01;
  //   centimeter = parseInt(millimeter)*0.1;
  //   inch = parseInt(millimeter)*0.0393701;
  //   foot = parseInt(millimeter)*0.0032808;
  //   yard = parseInt(millimeter)*0.0010936;
  //   document.getElementById('kilometer').value = kilometer;
  //   document.getElementById('meter').value = meter;
  //   document.getElementById('decimeter').value = decimeter;
  //   document.getElementById('centimeter').value = centimeter;
  //   document.getElementById('inch').value = inch;
  //   document.getElementById('foot').value = foot;
  //   document.getElementById('yard').value = yard;
  // }
  if (parseFloat(millimeter)) {
    kilometer = (parseFloat(millimeter)*0.000001).toFixed(6);
    meter = (parseFloat(millimeter)*0.001).toFixed(6);
    decimeter = (parseFloat(millimeter)*0.01).toFixed(6);
    centimeter = (parseFloat(millimeter)*0.1).toFixed(6);
    inch = (parseFloat(millimeter)*0.0393701).toFixed(6);
    foot = (parseFloat(millimeter)*0.0032808).toFixed(6);
    yard = (parseFloat(millimeter)*0.0010936).toFixed(6);
    document.getElementById('kilometer').value = kilometer;
    document.getElementById('meter').value = meter;
    document.getElementById('decimeter').value = decimeter;
    document.getElementById('centimeter').value = centimeter;
    document.getElementById('inch').value = inch;
    document.getElementById('foot').value = foot;
    document.getElementById('yard').value = yard;
  }
  else {
    document.getElementById('kilometer').value = 0;
    document.getElementById('meter').value = 0;
    document.getElementById('decimeter').value = 0;
    document.getElementById('centimeter').value = 0;
    document.getElementById('inch').value = 0;
    document.getElementById('foot').value = 0;
    document.getElementById('yard').value = 0;
  }
}

function inch_to_other() {
  var inch = document.getElementById("inch").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(inch)) {
  //   kilometer = parseInt(inch)*0.0000254;
  //   meter = parseInt(inch)*0.0254;
  //   decimeter = parseInt(inch)*0.254;
  //   centimeter = parseInt(inch)*2.54;
  //   millimeter = parseInt(inch)*25.4;
  //   foot = parseInt(inch)*0.0833333;
  //   yard = parseInt(inch)*0.0277778;
  //   document.getElementById('kilometer').value = kilometer;
  //   document.getElementById('meter').value = meter;
  //   document.getElementById('decimeter').value = decimeter;
  //   document.getElementById('centimeter').value = centimeter;
  //   document.getElementById('millimeter').value = millimeter;
  //   document.getElementById('foot').value = foot;
  //   document.getElementById('yard').value = yard;
  // }
  if (parseFloat(inch)) {
    kilometer = (parseFloat(inch)*0.0000254).toFixed(6);
    meter = (parseFloat(inch)*0.0254).toFixed(6);
    decimeter = (parseFloat(inch)*0.254).toFixed(6);
    centimeter = (parseFloat(inch)*2.54).toFixed(6);
    millimeter = (parseFloat(inch)*25.4).toFixed(6);
    foot = (parseFloat(inch)*0.0833333).toFixed(6);
    yard = (parseFloat(inch)*0.0277778).toFixed(6);
    document.getElementById('kilometer').value = kilometer;
    document.getElementById('meter').value = meter;
    document.getElementById('decimeter').value = decimeter;
    document.getElementById('centimeter').value = centimeter;
    document.getElementById('millimeter').value = millimeter;
    document.getElementById('foot').value = foot;
    document.getElementById('yard').value = yard;
  }
  else {
    document.getElementById('kilometer').value = 0;
    document.getElementById('meter').value = 0;
    document.getElementById('decimeter').value = 0;
    document.getElementById('centimeter').value = 0;
    document.getElementById('millimeter').value = 0;
    document.getElementById('foot').value = 0;
    document.getElementById('yard').value = 0;
  }
}

function foot_to_other() {
  var foot = document.getElementById("foot").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(foot)) {
  //   kilometer = parseInt(foot)*0.0003048;
  //   meter = parseInt(foot)*0.3048;
  //   decimeter = parseInt(foot)*3.048;
  //   centimeter = parseInt(foot)*30.48;
  //   millimeter = parseInt(foot)*304.8
  //   inch = parseInt(foot)*12;
  //   yard = parseInt(foot)*0.3333333;
  //   document.getElementById('kilometer').value = kilometer;
  //   document.getElementById('meter').value = meter;
  //   document.getElementById('decimeter').value = decimeter;
  //   document.getElementById('centimeter').value = centimeter;
  //   document.getElementById('millimeter').value = millimeter;
  //   document.getElementById('inch').value = inch;
  //   document.getElementById('yard').value = yard;
  // }
  if (parseFloat(foot)) {
    kilometer = (parseFloat(foot)*0.0003048).toFixed(6);
    meter = (parseFloat(foot)*0.3048).toFixed(6);
    decimeter = (parseFloat(foot)*3.048).toFixed(6);
    centimeter = (parseFloat(foot)*30.48).toFixed(6);
    millimeter = (parseFloat(foot)*304.8).toFixed(6);
    inch = (parseFloat(foot)*12).toFixed(6);
    yard = (parseFloat(foot)*0.3333333).toFixed(6);
    document.getElementById('kilometer').value = kilometer;
    document.getElementById('meter').value = meter;
    document.getElementById('decimeter').value = decimeter;
    document.getElementById('centimeter').value = centimeter;
    document.getElementById('millimeter').value = millimeter;
    document.getElementById('inch').value = inch;
    document.getElementById('yard').value = yard;
  }
  else {
    document.getElementById('kilometer').value = 0;
    document.getElementById('meter').value = 0;
    document.getElementById('decimeter').value = 0;
    document.getElementById('centimeter').value = 0;
    document.getElementById('millimeter').value = 0;
    document.getElementById('inch').value = 0;
    document.getElementById('yard').value = 0;
  }
}

function yard_to_other() {
  var yard = document.getElementById("yard").value;
  // var kilogram = document.getElementById("kilogram").value;
  // var tons = document.getElementById("tons").value;
  // The function which takes the value of gram and calculate to other numbers
  // if (parseInt(yard)) {
  //   kilometer = parseInt(yard)*0.0009144;
  //   meter = parseInt(yard)*0.9144;
  //   decimeter = parseInt(yard)*9.144;
  //   centimeter = parseInt(yard)*91.44;
  //   millimeter = parseInt(yard)*914.4;
  //   inch = parseInt(yard)*36;
  //   foot = parseInt(yard)*3;
  //   document.getElementById('kilometer').value = kilometer;
  //   document.getElementById('meter').value = meter;
  //   document.getElementById('decimeter').value = decimeter;
  //   document.getElementById('centimeter').value = centimeter;
  //   document.getElementById('millimeter').value = millimeter;
  //   document.getElementById('inch').value = inch;
  //   document.getElementById('foot').value = foot;
  // }
  if (parseFloat(yard)) {
    kilometer = (parseFloat(yard)*0.0009144).toFixed(6);
    meter = (parseFloat(yard)*0.9144).toFixed(6);
    decimeter = (parseFloat(yard)*9.144).toFixed(6);
    centimeter = (parseFloat(yard)*91.44).toFixed(6);
    millimeter = (parseFloat(yard)*914.4).toFixed(6);
    inch = (parseFloat(yard)*36).toFixed(6);
    foot = (parseFloat(yard)*3).toFixed(6);
    document.getElementById('kilometer').value = kilometer;
    document.getElementById('meter').value = meter;
    document.getElementById('decimeter').value = decimeter;
    document.getElementById('centimeter').value = centimeter;
    document.getElementById('millimeter').value = millimeter;
    document.getElementById('inch').value = inch;
    document.getElementById('foot').value = foot;
  }
  else {
    document.getElementById('kilometer').value = 0;
    document.getElementById('meter').value = 0;
    document.getElementById('decimeter').value = 0;
    document.getElementById('centimeter').value = 0;
    document.getElementById('millimeter').value = 0;
    document.getElementById('inch').value = 0;
    document.getElementById('foot').value = 0;
  }
}
