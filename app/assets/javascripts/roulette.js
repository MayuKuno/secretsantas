
$(function(){

    $('#button').one('click', function(){
    this.textContent = `${gon.to_user.nickname}`;
    var address = document.getElementById('address');
    var interests = document.getElementById('interests');
    var anonymous = document.getElementById('anonymous');

    // address.innerHTML = `
    // <a href="/users/${gon.to_user.id}">
    // 〒${gon.to_address.zipcode}${gon.to_addressPrefecture}${gon.to_address.city}${gon.to_address.district}${gon.to_address.building}${gon.to_address.room}
    // </a>
    // `;
    if (`${gon.to_user.interests}` === undefined || `${gon.to_user.interests}` === null || `${gon.to_user.interests}` === "null" || ""){
        interests.innerHTML = `Tips for choosing the perfect gift :<br>
        Appearently, ${gon.to_user.nickname} has nothing into.<br>
        Let's choose the gift with your own sense!
        `
        anonymous.innerHTML = 
        `
        <a href="/users/${gon.to_user.id}">
        <i class="fas fa-mask"></i>Ask ${gon.to_user.nickname} questions anonymously
        </a>
        `
    }else{
        interests.innerHTML = `Tips for choosing the perfect gift :<br>
        ${gon.to_user.nickname} is currently obsessed with ${gon.to_user.interests} <br>
        `
        anonymous.innerHTML = 
        `
        <a href="/users/${gon.to_user.id}">
        <i class="fas fa-mask"></i>Ask ${gon.to_user.nickname} questions anonymously
        </a>
        `
    }

  
    var count = 200;
    var defaults = {
    origin: { y: 0.7 }
    };
    function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
    }

    fire(0.25, {
    spread: 26,
    startVelocity: 55,
    });
    fire(0.2, {
    spread: 60,
    });
    fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 45,
    });
        
})
});

