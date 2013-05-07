function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var infowindowOptions = {
      position: new google.maps.LatLng(-34.397, 150.644),
      content: 'It now works!'
    };
    var infowindow = new google.maps.InfoWindow(infowindowOptions);

    for (var i = 0; i < 5; ++i) {
      var markerOptions = {
        position: new google.maps.LatLng(-34.397, 149.5 + 0.5 * i)
      };
      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(map);

      addListenerToMarker(marker, map, infowindow, i+1);
    }
}

// Opens info window when marker is clicked.
function addListenerToMarker(marker, map, infowindow, i) {
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.content = 'You clicked marker #' + i;
      infowindow.open(map, marker);
    });
}
