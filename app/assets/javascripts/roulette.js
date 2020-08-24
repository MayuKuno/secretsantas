// derangement(完全順列)
// 1.グループの参加者を配列に格納する
// @original
//  = [田中, 高橋, 鈴木, 佐藤, 斎藤]
// 2.配列の順番を入れ替えた別の配列を作る。
// @switched
//  = [高橋, 佐藤, 斎藤, 田中, 鈴木]
// 3.
// @original
// と
// @switched
// を組み合わせる
// 田中 = 高橋
// 高橋 = 佐藤
// 鈴木 = 斎藤
// 佐藤 = 田中
// 斎藤 = 鈴木

// 4.
// @original
// が自分の名前の時だけ、対応する自分の
// @switched
// だけ表示する

$(function(){
    $('#button').one('click', function(){
    var original = ["九野","森","佐藤","堀","小森","よう"];
    var switched = original.slice();
    var i = switched.length, j, temp;
    while (--i > 0){
      do{
        var j = Math.floor(Math.random() * (i + 1)); 
      } while (j == i);
      var temp = switched[j];
      switched[j] = switched[i]; 
      switched[i] = temp; 
    }
    this.textContent = switched[0];
    console.log(switched[0])
    console.log(switched[1])
    console.log(switched[2])
    console.log(switched[3])
    console.log(switched[4])
    console.log(switched[5])


    // original[0].name == current_user.name
    // switched[0];
    // original[1] = switched[0];
    // original[2] = switched[0];
    // original[3] = switched[0];
    // original[4] = switched[0];
    // original[5] = switched[0];

  
    })

});
