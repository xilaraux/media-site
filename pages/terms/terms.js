document.querySelector('.term-nav__list').addEventListener('click', function(e) {
    Array.prototype.forEach.call(document.querySelectorAll('.term-nav__item'), function (el) {
        el.classList.remove('term-nav__item_active');
    });

    e.target.parentNode.classList.add('term-nav__item_active');
});

document.getElementsByClassName('header__burger')[0].addEventListener('click', function() {
    document.querySelector('.header__list').classList.toggle('header__list_open');
});