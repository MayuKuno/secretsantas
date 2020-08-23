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
  const button = document.getElementById('button');
  button.addEventListener('click',() =>{
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
    button.textContent = switched[j];
  
    })
    // const n = Math.floor(Math.random() * retults.length);
  
  // var original = [];
  // var original = Group.where('id <= 1').pluck(user_id);
  // console.log (original)

//   var switched = original.slice();
//   var i = switched.length, j, temp;
//   while (--i > 0){
//     do{
//       var j = Math.floor(Math.random() * (i + 1)); 
//     } while (j == i);
//     var temp = switched[j];
//     switched[j] = switched[i]; 
//     switched[i] = temp; 
//   }
//   console.log (original)
//   console.log (switched)
//   $.each(switched, function(index, person) {
//     $('.message__containers__main__top__content__left__receiver').append(index + ':' + person + '<br>');
// });
});




