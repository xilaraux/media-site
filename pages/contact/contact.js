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

callbackButtons[0].addEventListener('click', _callbackHandler);
callbackButtons[1].addEventListener('click', _callbackHandler);

function _callbackHandler(event) {
    console.log(event);
}