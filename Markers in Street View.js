function initialize() {
    var myOptions = {
        position: new google.maps.LatLng(-27.46841, 153.00589),
        pov: {
            heading: -68.875,
            pitch: 12,
            zoom: 1
        }
    };

    var pano = new google.maps.StreetViewPanorama(document.getElementById('map_canvas'), myOptions);
    
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-27.468271, 153.005953),
        map: pano
    });
    
    pano.pov.heading = google.maps.geometry.spherical.computeHeading(
        pano.position,
        marker.position);
    pano.pov.pitch = 0;
}
