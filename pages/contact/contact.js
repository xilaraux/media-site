// Mobile burger
document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__list').classList.toggle('header__list_open');
});

// Map
function initMap() {
    var map = new google.maps.Map(document.getElementsByClassName('map')[0], {
        zoom: 15,
        center: {lat: 50.454972, lng: 30.511233},
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
    });

    var latlng = (new google.maps.Geocoder())
        .geocode({'address': 'вулиця Велика Житомирська, 25/2'}, function(results, status) {
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

for(var i = 0; i < callbackButtons.length; i++) {
    callbackButtons[i].addEventListener('click', _callbackActionHandler);
}

function _callbackActionHandler(event) {
    console.log(event.target);

    var contentSections = document.getElementsByClassName('content__section');

    for(var i = 0; i < contentSections.length; i++) {
        contentSections[i].classList.toggle('content__section_invisible');
    }
}