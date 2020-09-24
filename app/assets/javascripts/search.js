
$(function() {
  var search_list = $(".posts__containers__container__right__posts");

  function appendTweet(post) {
    if(post.user_sign_in && post.user_sign_in.id == post.user_id){
      var current_user =
       `
        <li>
         <a href="/posts/${post.id}/edit" data-method="get" >
          <i class="fas fa-edit"></i> Edit
         </a>
        </li>
        <li>
         <a href="/posts/${post.id}" data-method="delete" >
          <i class="fas fa-trash-alt"></i> Delete
         </a>
        </li>
      `
    } else {
      var current_user = ""
    }



    var html = 
    `
    <div class="posts__containers__container__right__posts__post">
    <div class="posts__containers__container__right__posts__post__top"> 
      <div class="posts__containers__container__right__posts__post__top__account">

      </div>
      <div class="posts__containers__container__right__posts__post__top__name">
        <a href="/users/${post.user_id}">
          ${post.nickname} 
        </a>
      </div>
      <div class="posts__containers__container__right__posts__post__top__manage">
        <ul class="posts__containers__container__right__posts__post__top__manage__lists">
         ${current_user}
        </ul>
      </div>
    </div> 
    <div class="posts__containers__container__right__posts__post__bottom"> 
    <img src=${post.image}  alt="サンプル">
      <div class="posts__containers__container__right__posts__post__bottom__caption">
        <div class="posts__containers__container__right__posts__post__bottom__caption__top">
          <div class="posts__containers__container__right__posts__post__bottom__caption__top__category">


          </div>
      </div>
      <div class="posts__containers__container__right__posts__post__bottom__caption__comment">
        <%= ${post.description}%>
      </div>
    </div>
  </div>   
    
    `
    search_list.append(html);
   }

  function appendErrMsgToHTML(msg) {
    var html = `<div class='name'>${ msg }</div>`
    search_list.append(html);
  }

  

  $(".search-input").on("keyup", function() {
    var input = $(".search-input").val();
    console.log(input);

    $.ajax({
      type: 'GET',
      url: '/posts/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(posts) {
      search_list.empty();
      if (posts.length !== 0) {
        posts.forEach(function(post){
          appendTweet(post);
        });
      }else {
        appendErrMsgToHTML("一致するツイートがありません");
      }
    })
    .fail(function() {
      alert('error');
    });
  });
});








