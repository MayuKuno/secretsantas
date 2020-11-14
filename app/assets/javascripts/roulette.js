
$(function(){

    $('#button').one('click', function(){
    this.textContent = `${gon.to_user.nickname}`;
    var address = document.getElementById('address');
    var interests = document.getElementById('interests');
    address.innerText = `〒${gon.to_address.zipcode}${gon.to_addressPrefecture}${gon.to_address.city}${gon.to_address.district}${gon.to_address.building}${gon.to_address.room}`;
    if (`${gon.to_user.interests}` === undefined || `${gon.to_user.interests}` === null || `${gon.to_user.interests}` === "null" || ""){
        interests.innerHTML = `Tips for choosing the perfect gift :\n
        Appearently, ${gon.to_user.nickname} is not obsessing with anything.\n
        Let's choose the gift with your own sense!

        <a href="/users/${gon.to_user.id}">
        Ask ${gon.to_user.nickname} a question anonymously
        </a>
        `
    }else{
        interests.innerText = `Tips for choosing the perfect gift :\n
        ${gon.to_user.nickname} is currently obsessed with ${gon.to_user.interests} `
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

