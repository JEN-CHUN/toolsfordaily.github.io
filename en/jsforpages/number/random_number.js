

function random_number() {


    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    var choose_num = document.getElementById("choose_num").value;
    var result = document.getElementById("result").value;
    var array_items = [];

    document.getElementById("result").value =""
    // if(choose_num > array_items.length)
    // {
    //   document.getElementById("result").value += "Please enter the number within the range.";
    // }
    if (max == "") {
      document.getElementById("result").value += "Error: Cannot find the maximum number\n";
    }
    if (min == "") {
      document.getElementById("result").value += "Error: Cannot find the maximum number\n";
    }

    // if (min <= 0 || max <= 0) {
    //   document.getElementById("result").value += "請輸入正整數\n";
    // }

      min = parseInt(min);
      max = parseInt(max);
      choose_num = parseInt(choose_num);

      // if (min <=0 || max<=0) {
      //   document.getElementById("result").value = "請勿輸入小於或等於零的數字\n";
      // }

      if (min >= max) {
        document.getElementById("result").value += "The minimum number must be smaller than the maximum number\n";
      }
      if (choose_num == "") {
        document.getElementById("result").value += "Error: Cannot find the number for the range.\n";
      }
    if (choose_num > (max-min+1) || choose_num <= 0) {
      document.getElementById("result").value ="The selected number is not within the range or the minimum number is bigger than the maximum number";
    }
    else {
      function* sequenceGenerator(min, max) {
          let currVal = min;

          while(currVal < max+1)
              yield currVal++;
        }
        array_items = Array.from( sequenceGenerator(min, max) );
        console.log(array_items);

        for (let i = array_items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array_items[i], array_items[j]] = [array_items[j], array_items[i]];
          }


        if (choose_num <= array_items.length || choose_num < 0) {
            for (var i = 0; i < choose_num; i++) {
              // document.getElementById("result").value += array_items[i]+"\n";
              document.getElementById("result").value += array_items[0]+"\n";
              array_items.shift();
                }
          }
            }

    }
