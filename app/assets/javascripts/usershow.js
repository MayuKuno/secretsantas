$(function(){
  $('.usershow__containers__container__bottom__tab-contents>div').hide();
  $('.usershow__containers__container__bottom__tab-contents>div').first().slideDown();
    $('.usershow__containers__container__bottom__tabs__tab-buttons span').click(function(){
      var thisclass=$(this).attr('class');
      $('#lamp').removeClass().addClass('#lamp').addClass(thisclass);
      $('.usershow__containers__container__bottom__tab-contents>div').each(function(){
        if($(this).hasClass(thisclass)){
          $(this).fadeIn(800);
        }
        else{
          $(this).hide();
        }
      });
    });

  

// ========

    function addparticipants(user) {
      let html = `
        <div class="chat-group-user clearfix">
          <p class="chat-group-user__nickname">${user.nickname}</p>
          <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-nickname="${user.nickname}">追加</div>
        </div>
      `;
      $("#participantssearchresult").append(html);
    }
  
    function addNoparticipants() {
      let html = `
        <div class="chat-group-user clearfix">
          <p class="chat-group-user__nickname">ユーザーが見つかりません</p>
        </div>
      `;
      $("#participantssearchresult").append(html);
    }
    function addDeleteUser(nickname, id) {
      let html = `
      <div class="chat-group-user clearfix" id="${id}">
        <p class="chat-group-user__nickname">${nickname}</p>
        <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}" data-user-nickname="${nickname}">削除</div>
      </div>`;
      $(".js-add-participant").append(html);
    }
    function addMember(userId) {
      let html = `<input value="${userId}" name="group[participant_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
      $(`#${userId}`).append(html);
    }

    $("#participantssearch").on("keyup", function() {
      let input = $("#participantssearch").val();
      $.ajax({
        type: "GET",
        url: "/users",
        data: { keyword: input },
        dataType: "json"
      })
      .done(function(users) {
        $("#participantssearchresult").empty();
        if (users.length !== 0) {
          users.forEach(function(user) {
            addparticipants(user);
          });
        } else if (input.length == 0) {
          return false;
        } else {
          addNoparticipants();
        }
      })
      .fail(function() {
        alert("通信エラーです。ユーザーが表示できません。");
      });
    });
    $(document).on("click", ".chat-group-user__btn--add", function() {
      const userNickname = $(this).attr("data-user-nickname");
      const userId = $(this).attr("data-user-id");
      $(this)
        .parent()
        .remove();
      addDeleteUser(userNickname, userId);
      addMember(userId);
    });
    $(document).on("click", ".chat-group-user__btn--remove", function() {
      $(this)
        .parent()
        .remove();
    });


  });


  

