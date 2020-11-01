
$(function(){
    $('#button').one('click', function(){
    this.textContent = `${gon.to_user.nickname}`;
    var address = document.getElementById('address');
    address.innerText = `〒${gon.to_address.zipcode}${gon.to_addressPrefecture}${gon.to_address.city}${gon.to_address.district}${gon.to_address.building}${gon.to_address.room}`;
    })
});

