(function () {
    let burgerBtn = document.querySelector('.page-header__burger-box')
    let popupMenu = document.querySelector('.popup.popup-menu')
    let popupCloseButton = document.querySelector('.btn-close.popup__btn-close')

    burgerBtn.addEventListener('click', function () {
        popupMenu.classList.add('is-active')    
    })

    popupCloseButton.addEventListener('click', function () {
        popupMenu.classList.remove('is-active')    
    })
}());

