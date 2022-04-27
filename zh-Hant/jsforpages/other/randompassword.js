function password_create() {
  var random_words= "";
  var numbers = document.getElementById('numbers');
  var cap_abc = document.getElementById('cap_abc');
  var small_abc = document.getElementById('small_abc');
  var special = document.getElementById('special');
  var result = document.getElementById('result');
  var time = 0;
  var warning = document.getElementById("warning");
  var generate_time = parseInt(document.getElementById('generate_time').value);
  var password_length = parseInt(document.getElementById('password_length').value);
  var new_password ="";
  // generate_time = generate_time.value;
  // password_length = password_length.value;
  // function random_repeat(min,max) {
  //   var result           = '';
  //   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   var charactersLength = characters.length;
  //   for ( var i = 0; i < length; i++ ) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  // }
  // console.log(generate_time);
  // console.log(password_length);

  if (numbers.checked) {
    random_words += '0123456789';
  }
  if (cap_abc.checked) {
    random_words += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (small_abc.checked) {
    random_words += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (special.checked) {
    random_words += '!@#$%^&*';
  }
console.log(random_words);
  if (numbers.checked==false && cap_abc.checked==false && small_abc.checked==false && special.checked==false) {
    document.getElementById("check_warning").innerHTML = "請至少勾選上述一格";
  }
  if (isNaN(generate_time) || isNaN(password_length)) {
    warning.innerHTML = "請輸入正確的數字";
  }
  if (generate_time<=0 || password_length<=0) {
    warning.innerHTML = "輸入之數字不可小於1";
  }
  if (generate_time>0 && password_length>0){
	document.getElementById("check_warning").innerHTML = "";
    warning.innerHTML = "";
    result.innerHTML ="";
    while (time<generate_time) {
      for (var i = 0; i < password_length; i++) {
        new_password += random_words.charAt(Math.floor(Math.random() * random_words.length));
        console.log(new_password);
      }
      result.innerHTML += new_password+"\n";
      new_password =""
      time = time+1;
    }
  }
}

function clean_text() {
  check_warning.innerHTML ="";
  warning.innerHTML = "";
  result.innerHTML = "";
}
