// $(function(){
//   function appendCategory(category) {
//     let html = `
//     <div class="chat-post-category clearfix">
//       <p class="chat-post-category__name">${category.name}</p>
//       <div class="category-search-add chat-post-category__btn chat-post-category__btn--add" data-category-id="${category.id}" data-category-name="${category.name}">追加</div>
//     </div>
//   `;
//   $("#category-search-result").append(html);
//   }

//   function addNoCategory() {
//     let html = `
//     <div class="chat-post-category clearfix">
//       <p class="chat-post-category__name">タグが見つかりません</p>
//     </div>
//   `;
//   $("#category-search-result").append(html);
//   }

//   function addDeleteCategory(name, id) {
//     let html = `
//     <div class="chat-post-category clearfix" id="${id}">
//       <p class="chat-post-category__name">${name}</p>
//       <div class="category-search-remove chat-post-category__btn chat-post-category__btn--remove js-remove-btn" data-category-id="${id}" data-category-name="${name}">削除</div>
//     </div>`;
//     $(".js-add-category").append(html);
//   }
//   function addCategory(categoryId) {
//     let html = `<input value="${categoryId}" name="post[category_ids][]" type="hidden" id="post_category_ids_${categoryId}" />`;
//     $(`#${categoryId}`).append(html);
//   }


// // new
//   $("#category-search-field").on("keyup", function() {
//     let input = $("#category-search-field").val();
//     $.ajax({
//     type: "GET",
//     url: '/categories',
//     data: { keyword: input },
//     dataType: "json"
//     })
  
//     .done(function(categories) {
//         $("#category-search-result").empty();
//         if (categories.length !== 0) {
//             categories.forEach(function(category) {
//               appendCategory(category);
//             });
//         } else if (input.length == 0) {
//             return false;
//         } else {
//             addNoCategory();
//         }
//         })
//     .fail(function() {
//         alert("通信エラーです。タグが表示できません。");
//     });
//   });

//     $(document).on("click", ".chat-post-category__btn--add", function() {
//       const categoryName = $(this).attr("data-category-name");
//       const categoryId = $(this).attr("data-category-id");
//       $(this)
//         .parent()
//         .remove();
//       addDeleteCategory(categoryName, categoryId);
//       addCategory(categoryId);
//     });
//     $(document).on("click", ".chat-post-category__btn--remove", function() {
//       $(this)
//         .parent()
//         .remove();
//     });
// });