

function random_number() {


    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    var choose_num = document.getElementById("choose_num").value;
    var result = document.getElementById("result").value;
    var array_items = [];

    document.getElementById("result").value =""
    // if(choose_num > array_items.length)
    // {
    //   document.getElementById("result").value += "請輸入正確的範圍";
    // }
    if (max == "") {
      document.getElementById("result").value += "您尚未输入最大值\n";
    }
    if (min == "") {
      document.getElementById("result").value += "您尚未输入最小值\n";
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
        document.getElementById("result").value += "最小数必须小于最大数\n";
      }
      if (choose_num == "") {
        document.getElementById("result").value += "您尚未输入范围\n";
      }
    if (choose_num > (max-min+1) || choose_num <= 0) {
      document.getElementById("result").value ="所选取的数字超过范围 或是 最小数大于等于最大数";
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
