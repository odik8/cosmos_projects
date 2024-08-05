
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // autoplay: {
    //     delay: 2000,
    //     disableOnIteraction: false,
    // },

    loop: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
    },

    loop: true,
});

let headerBurger = document.querySelector('.header__burger') 
let popup = document.querySelector('.popup-menu')
let popupBtnClose = document.querySelector('.popup__btn-close');


headerBurger.addEventListener('click', function () {
    popup.classList.toggle('is-active')
})

popup.addEventListener('click', function (event) {
    console.log(event.target)
    if(event.target === popupBtnClose){

        popup.classList.toggle('is-active')
    }
})



// popupBtnClose.addEventListener('click', function (event) {
//     console.log(event.target)
//     popup.classList.toggle('is-active')
// })

// popupBtnClose.addEventListener('click', function () {
//     popup.classList.remove('is-active')
// })
