function drawing_straws() {

    var list_name = document.getElementById("list_name").value;
    var array_lines = list_name.split("\n");
    var array_items = [];
    var choose_num = document.getElementById("choose_num").value;

    document.getElementById("drawing_list").value ="";

    if ( (choose_num%1) != 0 || choose_num <= 0) {
        document.getElementById("drawing_list").value += "請輸入正確的數字";
      }
    else {
      for(var i = 0;i < array_lines.length;i++){
          array_items.push(array_lines[i]);
          // console.log(array_items);
      }
      for (let i = array_items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array_items[i], array_items[j]] = [array_items[j], array_items[i]];
        }
      console.log(array_items);
      if (choose_num > array_items.length) {
        document.getElementById("drawing_list").value += "請輸入正確的範圍";
      }
      if (choose_num <= array_items.length || choose_num < 0) {
        var place = 1;
        for (var i = 0; i < choose_num; i++) {
          document.getElementById("drawing_list").value += place + " ----> " + array_items[i]+"\n";
          place += 1;
          }
        }
      // if (choose_num <= 0) {
      //   document.getElementById("drawing_list").value += "請輸入正整數";
      // }
      // if(choose_num === parseFloat(choose_num) || choose_num > array_items.length)
      // {
      //   document.getElementById("drawing_list").value += "請輸入正確的範圍";
      // }
        }
        
  }
