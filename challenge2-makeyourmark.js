var beaches = [
  ['Bells Beach, Torquay, Victoria', -38.363149, 144.286794],
  ['Bondi Beach, New South Wales', -33.890542, 151.274856],
  ['Cottesloe Beach, Cottesloe, Western Australia', -31.995599, 115.750495],
  ['Manly Beach, New South Wales', -33.80010128657071, 151.28747820854187],
  ['Noosa Heads, Queensland', -26.396175, 153.089397],
  ['Scarborough Beach, Australia', -34.27458, 150.959348],
  ['St Kilda Beach', -34.738078, 138.532282],
  ['Surfers\' Paradise, Gold Coast, Queensland', -28.00228, 153.431052]
];

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
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < beaches.length; ++i) {
      var markerOptions = {
        position: new google.maps.LatLng(beaches[i][1],beaches[i][2])
      };
      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(map);

      addListenerToMarker(marker, map, infowindow, i);
      bounds.extend(markerOptions.position);
    }
    map.fitBounds(bounds);
}

// Opens info window when marker is clicked.
function addListenerToMarker(marker, map, infowindow, i) {
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.content = beaches[i][0];
      infowindow.open(map, marker);
    });
}
