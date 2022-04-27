// var number_min = document.getElementById('number_min').value;
// var number_max = document.getElementById('number_max').value;
// var check_num = document.getElementById('check_num').value;
var quiz_introduction = document.getElementById('quiz_introduction');
var min_warning = document.getElementById('min_warning');
var max_warning = document.getElementById('max_warning');
var range_of_answer = document.getElementById('range_of_answer');
var answer = document.getElementById('answer');
var random_number;

  function guess_number() {
    //This function helps get minimum number and maximum number
    //and check if the numbers are valid
    //if not valid the function will ask the user to choose another number
    //or if the numbers are valid but min bigger than max
    //both number becomes null
    answer.innerHTML = ""
    function get_min_max() {
      var number_min = document.getElementById('number_min').value;
      var number_max = document.getElementById('number_max').value;

      quiz_introduction.innerHTML =""

        if (number_min == "" && number_max == "") {
            min_warning.innerHTML = "请输入最小值";
            max_warning.innerHTML = "请输入最大值";
        }
        if (number_min != "" && number_max == "") {
            min_warning.innerHTML = "";
            max_warning.innerHTML = "请输入最大值";
        }
        if (number_min == "" && number_max != "") {
            min_warning.innerHTML = "请输入最小值";
            max_warning.innerHTML = "";
        }
        if (number_min == "" && number_max != "") {
            min_warning.innerHTML = "请输入最小值";
            max_warning.innerHTML = "";
        }
        if (number_min == "" && number_max != "") {
            min_warning.innerHTML = "请输入最小值";
            max_warning.innerHTML = "";
        }

        if (number_min != "" && number_max != "") {
          number_min = parseInt(number_min);
          number_max = parseInt(number_max);
          min_warning.innerHTML = "";
          max_warning.innerHTML = "";
          // console.log(number_min);
          // console.log(number_max);
          // if (number_min <=0 && number_max >0) {
          //     min_warning.innerHTML = "請輸入一個大於0的值";
          //     max_warning.innerHTML = "";
          // }
          // if (number_min >0 && number_max <=0) {
          //     min_warning.innerHTML = "";
          //     max_warning.innerHTML = "請輸入一個大於0的值";
          // }
          // if (number_min <=0  && number_max <=0) {
          //     min_warning.innerHTML = "請輸入兩個大於0的值";
          //     max_warning.innerHTML = "";
          // }
          if (number_min <=0 || number_max<=0) {
            min_warning.innerHTML = "请勿输入小于或等于零的数字";
            max_warning.innerHTML = "";
            quiz_introduction.innerHTML = "请重新输入";
            return 0;
          }else if (number_min == number_max || number_min > number_max) {
            min_warning.innerHTML = "";
            max_warning.innerHTML = "";
            quiz_introduction.innerHTML = "您所输入的最小值大于或等于最大值";
            return 0;
          }
          else {
            min_warning.innerHTML = "";
            max_warning.innerHTML = "";
            quiz_introduction.innerHTML = "已确认您的数字";
            return [number_min,number_max]
          }
        }
      }

      function create_random_number(min, max) {
        //This function creates a random number
          min = Math.ceil(min);
          max = Math.floor(max);
          random_number = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
          return random_number;
        }

          get_min_max();
          console.log(get_min_max());
          if (get_min_max() == 0) {
            range_of_answer.innerHTML = "数字无效，请重新输入";
            number_min = null;
            number_max = null;
          }
          else if (get_min_max()==null) {

          }else {
            let number_array = get_min_max().map(Number);
            number_min = (number_array[0]);
            number_max = (number_array[1]);
            range_of_answer.innerHTML = ""
          }
        random_number = create_random_number(number_min, number_max)
  }

  function erase_all() {
    var min_warning = document.getElementById('min_warning');
    var max_warning = document.getElementById('max_warning');
    var quiz_introduction = document.getElementById('quiz_introduction');
    var range_of_answer = document.getElementById('range_of_answer');
    var answer = document.getElementById('answer');
    min_warning.innerHTML =""
    max_warning.innerHTML =""
    quiz_introduction.innerHTML =""
    range_of_answer.innerHTML =""
    answer.innerHTML =""
  }

function check_answer() {
    var check_num = document.getElementById('check_num').value;
    var user_ans = parseInt(check_num);
    var goal_num;
    quiz_introduction.innerHTML =""
    goal_num  = random_number;
    console.log(user_ans);
    console.log(goal_num);
    if (goal_num === 0 || Number.isNaN(goal_num)) {
      console.log('1');
      console.log(goal_num);
    }else {
      if (user_ans == goal_num) {
            quiz_introduction.innerHTML =""
            range_of_answer.innerHTML = "";
            answer.innerHTML ="恭喜你答对了！"}

      if (user_ans>number_min && user_ans<goal_num) {
        quiz_introduction.innerHTML =""
        number_min = user_ans;
        range_of_answer.innerHTML = "数字在"+number_min+"到"+number_max+"之间";
          }
      if (user_ans<number_max && user_ans>goal_num) {
        quiz_introduction.innerHTML =""
        number_max = user_ans;
        range_of_answer.innerHTML = "数字在"+number_min+"到"+number_max+"之间";
        }
      if (user_ans>number_max || user_ans<number_min) {
        quiz_introduction.innerHTML ="请输入范围内的数字"
        range_of_answer.innerHTML = "数字在"+number_min+"到"+number_max+"之间";
        }
      // if (user_ans>=number_max || user_ans<=number_min && Math.abs((user_ans-number_min))) {
      //   quiz_introduction.innerHTML ="請輸入範圍內的數字"
      //   range_of_answer.innerHTML = "數字在"+(number_min-1)+"到"+number_max+"之間";
      //   }

      }
    }
