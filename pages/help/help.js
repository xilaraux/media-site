// Mobile burger
document.getElementsByClassName('header__burger')[0].addEventListener('click', function() {
    document.querySelector('.header__list').classList.toggle('header__list_open');
});

/**
 * Implementation of page navigation.
 * @constructor
 */
var DocumentNavigation = (function () {

    // Set navigation through categories.
    function _setCategoriesNav() {

        function showCategory(categoryId) {
            var categoriesAreas = document.querySelectorAll('.faq__section');

            for(var i = 0, length = categoriesAreas.length; i < length; i++) {
                if(i == categoryId) {
                    categoriesAreas[i].classList.remove('faq__section_invisible');
                    continue;
                }
                categoriesAreas[i].classList.add('faq__section_invisible');
            }
        }

        var categoriesContainer = document.getElementsByClassName('categories__list')[0];

        categoriesContainer.addEventListener('click', function(e) {
            // e.preventDefault();

            var target = e.target;

            if(target.tagName != 'A' || target.classList.contains('categories__link_active')) return;

            var links = document.getElementsByClassName('categories__link');
            for(var i = 0, length = links.length; i < length; i++) {
                links[i].classList.remove('categories__link_active');
            }
            target.classList.toggle('categories__link_active');

            var categoryId = target.getAttribute('data-category');

            showCategory(categoryId);
        });
    }

    function init() {
        _setCategoriesNav();
    }

    return {
        init: init
    }
})();

DocumentNavigation.init();