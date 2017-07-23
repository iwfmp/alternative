/*
You will need this to add your loaction via longitude and latitude on google maps also added the center position on longitude for if you keep the form over the map itself,
This also contains the zoom. */
function initializeMap() {

    var lat = '32.0444263';
    var lon = '34.78172840000002';
    var centerLon = lon - -0.0055;
    var myOptions = {
        scrollwheel: false, // if true it will scroll when you scroll the mouse wheel.
        draggable: true, // if true this will move when you hold the mouse button.
        disableDefaultUI: true, // Default depending on googleapis
        center: new google.maps.LatLng(lat, centerLon), // this is the addition of the center line, change CenterLon to move the pointer.
        zoom: 16, // Change this value to zoom in or out.
        mapTypeId: google.maps.MapTypeId.ROADMAP // This is the road map version, can be changed using the googleapis.
    };
    var map = new google.maps.Map(document.getElementById('google-map'), myOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, lon),
    });
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker); // When you click this will show details of the location in question.
    });
    infowindow.close(map, marker);
}
