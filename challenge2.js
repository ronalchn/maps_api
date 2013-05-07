var map;
var points=[];
var polygon;

function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-27.463347, 153.02496),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    google.maps.event.addListener(map, 'click', eventHandler);
    
    polygon = new google.maps.Polygon({
      path: points,
      strokeColor: "#FF0000",
      strokeWeight: 2
    });
    polygon.setMap(map);
}

function eventHandler(details) {
  var options = {
      position: details.latLng
  };
  var marker = new google.maps.Marker(options);
  marker.setMap(map);
  points.push(details.latLng);
  polygon.setPath(points);
}
