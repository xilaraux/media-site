// Mobile burger
document.getElementsByClassName('header__burger')[0].addEventListener('click', function() {
    document.querySelector('.header__list').classList.toggle('header__list_open');
});

// Map
function initMap() {
    var map = new google.maps.Map(document.getElementsByClassName('map')[0], {
        zoom: 15,
        center: {lat: 50.454972, lng: 30.511233},
        disableDefaultUI: true
    });

    var latlng = (new google.maps.Geocoder()).geocode({'address': 'вулиця Велика Житомирська, 25/2'}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

// Callback popup
var callbackButtons = document.getElementsByClassName('callback');

callbackButtons[0].addEventListener('click', _callbackActionHandler);
callbackButtons[1].addEventListener('click', _callbackActionHandler);
callbackButtons[2].addEventListener('click', _callbackActionHandler);

function _callbackActionHandler(event) {
    var contentSections = document.getElementsByClassName('content__section');

    for(var i = 0; i < contentSections.length; i++) {
        contentSections[i].classList.toggle('content__section_invisible');
    }
}

// // Close callback popup
// document.getElementsByClassName('content__close')[0].addEventListener('click', function() {
//     var callbackSection = document.getElementsByClassName('content__section_callback')[0];
//     // var header = document.getElementsByClassName('header')[0];
//     var contentSections = document.getElementsByClassName('content__section');
//
//     for(var i = 0; i < contentSections.length; i++) {
//         contentSections[i].classList.toggle('content__section_invisible');
//     }
//     // header.classList.toggle('header_fix');
//     // callbackSection.classList.toggle('content__section_visible');
// });