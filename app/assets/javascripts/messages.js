$(function(){
  // console.log("test1");
  function buildHTML(message){
    
    if ( message.user_id ) {
      if ( message.image ) {
          var html = `
          <div class ="message__containers__main__middle__talk" data-message-id=${message.id}>
          <div class="message__containers__main__middle__talk__rightImage" >
          <div class ="message__containers__main__middle__talk__right__bottom">
            ${message.content}
            <img src=${message.image} >
          </div>
          <div class ="message__containers__main__middle__talk__right__time">
            ${message.created_at}
          </div> 
          </div>
          </div>
          `
          return html;

      }else{
        var html =
        `
        <div class ="message__containers__main__middle__talk" data-message-id=${message.id}>
        <div class="message__containers__main__middle__talk__right" >
        <div class ="message__containers__main__middle__talk__right__bottom">
           ${message.content} 
        </div>
         <div class ="message__containers__main__middle__talk__right__time">
          ${message.created_at}
        </div> 
        </div>
        </div>
        `
        return html;
      }
      
    } else {
      if ( message.image ) {
        var html =
        `
        <div class ="message__containers__main__middle__talk" data-message-id=${message.id}>
        <div class="message__containers__main__middle__talk__leftImage">
         <div class ="message__containers__main__middle__talk__left__top">

         </div>
         <div class ="message__containers__main__middle__talk__left__bottom">
          <%= イメージ${message.content}%>
          <img src=${message.image} >

         </div>
          <div class ="message__containers__main__middle__talk__left__time">
          <a href="/users/<%= message.user.id %>">
          <%= message.user.nickname %> 
          </a>
          ${message.created_at} 
         </div> 

         </div>
         </div>
         `


      }else{
      var html =
       `
       <div class ="message__containers__main__middle__talk" data-message-id=${message.id}>
       <div class="message__containers__main__middle__talk__left">
        <div class ="message__containers__main__middle__talk__left__top">

        </div>
        <div class ="message__containers__main__middle__talk__left__bottom">
         ${message.content}
        </div>
         <div class ="message__containers__main__middle__talk__left__time">
         <a href="/users/<%= message.user.id %>">
         <%= message.user.nickname %> 
         </a>
         ${message.created_at} 
        </div> 
        </div>
        </div>
        `
      return html;
      };
    };
  }

  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message__containers__main__middle').append(html);
      $('form')[0].reset();
      $('.message__containers__main__middle').animate({ scrollTop: $('.message__containers__main__middle')[0].scrollHeight});
      $('.message__containers__main__bottom__right').prop('disabled', false);

    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.message__containers__main__bottom__right').prop('disabled', false);
   });
  })


  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var last_message_id = $('.message__containers__main__middle__talk:last').data("message-id");
    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        //追加するHTMLの入れ物を作る
        var insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        //メッセージが入ったHTMLに、入れ物ごと追加
        $('.message__containers__main__middle').append(insertHTML);
        $('.message__containers__main__middle').animate({ scrollTop: $('.message__containers__main__middle')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }


});