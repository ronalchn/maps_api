function initialize() {
    // The map's center and zoom will be set by the DirectionsRenderer.
    window.map = new google.maps.Map(document.getElementById('map_canvas'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Though the map and panel are set on the renderer, nothing will display
    // until the DirectionsResult is set.
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('panel'));

    // Driving directions between Pyrmont and Canberra.
    var request = {
      origin: "Sydney",
      waypoints: [{
        location: "Canberra",
        stopover: true
      }],
      destination: "Melbourne",
      travelMode: google.maps.TravelMode.DRIVING
    };

    // Makes a request to the directions server and sets the result on the
    // DirectionsRenderer for display.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      } else {
        window.console.log('failed to get directions: '  + status);
      }
    });
}
