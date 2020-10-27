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
    this.textContent = `${gon.to_user.nickname}`;
    })

});

