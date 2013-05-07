var map;

function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-27.463347, 153.02496),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    google.maps.event.addListener(map, 'click', eventHandler);
}

function eventHandler(details) {
  var options = {
      position: new google.maps.LatLng(details.latLng.kb, details.latLng.lb)
  };
  var marker = new google.maps.Marker(options);
  marker.setMap(map);
}
