document.querySelector('.term-nav__list').addEventListener('click', function(e) {
    if(e.target.parentNode.nodeName === 'LI') {
        Array.prototype.forEach.call(document.querySelectorAll('.term-nav__item'), function (el) {
            el.classList.remove('term-nav__item_active');
        });

        e.target.parentNode.classList.add('term-nav__item_active');
    }
});