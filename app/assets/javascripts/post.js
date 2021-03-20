

$(function() {
    $('#nav-toggle').on('click', function() {
    $('header').toggleClass('open');
    });
});

  
$(function() {
  function readURL(input) {
      if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
  $('#img_prev').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
      }
  }
  $(".postsnew__containers__container__form__images__image__file").change(function(){
      readURL(this);
  });
});