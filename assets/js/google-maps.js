function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: -25.699589, lng: 28.19633 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 10,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Courtney Coetser' // Title Location
    });
}