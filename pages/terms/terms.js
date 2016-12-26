document.querySelector('.term-nav__list').addEventListener('click', function(e) {

    // First method.
    // Looking for invalid targets and terminate event.

    //if(e.target.nodeName == "UL" || e.target.nodeName == "LI") {
    //    return;
    //}
    //
    //Array.prototype.forEach.call(document.querySelectorAll('.term-nav__item'), function (el) {
    //    el.classList.remove('term-nav__item_active');
    //});
    //
    //e.target.parentNode.classList.add('term-nav__item_active');

    // Second method.
    // Looking for closest list item and then do some magic.

    //if(!e.target.closest("li")) {
    //    return;
    //}
    //
    //Array.prototype.forEach.call(document.querySelectorAll('.term-nav__item'), function (el) {
    //    el.classList.remove('term-nav__item_active');
    //});
    //
    //e.target.closest("li").classList.add('term-nav__item_active');

    // Third method.

    var target = e.target;

    if(!target.classList.contains('term-nav__link')) {
        return;
    }

    Array.prototype.forEach.call(document.querySelectorAll('.term-nav__link'), function(el) {
        el.classList.remove('term-nav__link_active');
    });

    target.classList.add('term-nav__link_active');
});

document.getElementsByClassName('header__burger')[0].addEventListener('click', function() {
    document.querySelector('.header__list').classList.toggle('header__list_open');
}, false);