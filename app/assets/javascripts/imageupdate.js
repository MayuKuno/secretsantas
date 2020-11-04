$(function() {

    // 参考https://iiiso.ti-da.net/e9424241.html
  $('#upload_file').on('change', function(){ // 解説①ファイルが選択されるたびに動作するイベントハンドラ
    var strFileInfo = $('#upload_file')[0].files[0]; // 解説②jQueryでファイルオブジェクトを変数にセット
    if(strFileInfo && strFileInfo.type.match('image.*')){ // 解説③選択されたファイルが画像であれば、処理を継続

      $('#preview').remove();  // 解説④表示中のプレビュー画像があれば、削除しておく
      $('#preview_area').append('<img id="preview" />'); // 解説⑤横幅300pxの空の画像をプレビューエリアにセット
      $('.text').remove();
      fileReader = new FileReader(); // 解説⑥HTML5 のAPI である FileReader() メソッドを初期化
      fileReader.onload = function(event){
        $('#preview').attr('src', event.target.result);
      }

      fileReader.readAsDataURL(strFileInfo); // 解説⑦ローカルフォルダから画像ファイルが読み込まれる
    }
  });

});