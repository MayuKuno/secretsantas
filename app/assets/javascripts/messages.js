$(function(){
  function buildHTML(message){
    if ( message.user_id ) {
      var html =
      `
      <div class="message__containers__main__middle__talk__right">
      <div class ="message__containers__main__middle__talk__right__bottom">
         ${message.content} 
      </div>
       <div class ="message__containers__main__middle__talk__right__time">
        ${message.created_at}
      </div> 
      </div>
      `
      return html;
    } else {
      var html =
       `
       <div class="message__containers__main__middle__talk__left">
        <div class ="message__containers__main__middle__talk__left__top">
          <div class ="message__containers__main__middle__talk__left__top__name">
            <a href="/users/<%= message.user.id %>">
              ${message.user_nickname}
           </a>
          </div>
        </div>
        <div class ="message__containers__main__middle__talk__left__bottom">
         ${message.content}
        </div>
         <div class ="message__containers__main__middle__talk__left__time">
         ${message.created_at} 
        </div> 
        </div>
        `
      return html;
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
});