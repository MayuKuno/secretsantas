
$(function() {
  var search_user_list = $(".container__search__result");
  

  function appendUser(user) {
    if (user.image.url == null){
      var picture =
      ` 
      <img src="/assets/account.png" />
      
      `
    }else {
      var picture = 
      ` 
      <img src = '${user.image.url}'/>
      `
    }

    var html = 
    ` 
    <a href="/users/${user.id}">

    <li class="container__search__result__each"> 
    ${picture}
 
    <div class="container__search__result__each__name">${user.nickname} </div>
    </li>
    </a>
    `
    search_user_list.append(html);
   }

  function appendErrMsgToHTML() {
    var html = `
    <li class="container__search__result__each noresult"> 
    No results
    </li>
    `
    search_user_list.append(html);
  }
  

  $(".search-user-input").on("keyup", function() {
    var input = $(".search-user-input").val();
    // $('.posts__containers__container__right__title').hide();
    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      search_user_list.empty();
      if (input.length == 0){
        search_user_list.hide();
      }else{
        search_user_list.show();
      }


      if (users.length !== 0) {
        users.forEach(function(user){

              appendUser(user);
              // appendsearchclear("");

          });
        
      }else{

        appendErrMsgToHTML("");

      }
    })
    .fail(function() {
      alert('error');
    });
  });
});








