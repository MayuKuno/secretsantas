document.addEventListener(
  "DOMContentLoaded", e => {
    let modal_open = document.getElementsByClassName("modal-open-btn");
    elements = Array.from( modal_open ) ;

    elements.forEach(x => 
      x.onclick = function () {
        console.log("削除ボタンを押した")
        $('#overlay').fadeIn();
        document.getElementById('modal-close-btn').onclick = function () {
          $('#overlay').fadeOut();
          console.log("キャンセルボタンを押した")

        };
        document.getElementById("delete-comformation-btn").onclick = function () {
          let delete_collection = document.getElementsByClassName("item-delete-btn") //.click();
          delete_array = Array.from( delete_collection ) ;
            // var fruits = [ "apple", "orange", "melon" ];
            delete_array.forEach( function( item ) {
            item.click();


          });

        };
      }
      );

    
    
  },
  false
  
);

