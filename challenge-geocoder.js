function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    var geocoder = new google.maps.Geocoder();

    var request = {
      address: "Brisbane"
    };

    // geocoder.geocode(...);
    
    geocoder.geocode(request, function(results, status) {
        var bounds = new google.maps.LatLngBounds();
        if (status == google.maps.GeocoderStatus.OK) {
            for (var i in results) {
                var marker = new google.maps.Marker({
                  map: map,
                  position: results[i].geometry.location
                });
                bounds.extend(marker.getPosition());
            }
            map.fitBounds(bounds);
        } else {
            window.console.log('failed to geocode address: '  + status);
        }
    });
}
