$(function() {

//     // 参考https://iiiso.ti-da.net/e9424241.html
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






// 参考https://qiita.com/tonkatu_tanaka/items/77fd4300f543a4f9682d
  var fileArea = document.getElementsByClassName('image-upload'); //dragDropArea(id)
  var fileInput = document.getElementById('upload_file'); //fileInput(id)
  $(fileArea).on('dragover', function(evt){
    evt.preventDefault();
    $(fileArea).addClass('dragover');
  });
  $(fileArea).on('dragleave', function(evt){
      evt.preventDefault();
      $(fileArea).removeClass('dragover');
  });
  $(fileArea).on('drop', function(evt){
      evt.preventDefault();
      $(fileArea).removeClass('dragenter');
      var files = evt.originalEvent.dataTransfer.files;
      $('.text').remove();
      console.log("DRAG & DROP");
      console.table(files);
      fileInput.files = files;
      photoPreview('onChenge',files[0]);
  });
  
  function photoPreview(event, f = null) {
    var file = f;
    if(file === null){
        file = event.target.files[0];
    }
    var reader = new FileReader();
    var preview = document.getElementById("preview_area"); //previewArea(id)
    var previewImage = document.getElementById("preview"); //不明
  
    if(previewImage != null) {
      preview.removeChild(previewImage);
    }
    reader.onload = function(event) {
      var img = document.createElement("img");
      img.setAttribute("src", reader.result);
      img.setAttribute("id", "preview");
      preview.appendChild(img);


    };
  
    reader.readAsDataURL(file);
  }
  

});

