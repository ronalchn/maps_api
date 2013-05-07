var map;

function initialize() {
    var myOptions = {
      zoom: 12,
      center: new google.maps.LatLng(-36.88846,174.915133),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
            stylers: [
                {hue: 100},
                {saturation: -50},
                {lightness: 10},
                {gamma: 1},
                {inverse_lightness: true}
            ]
        }
      ]
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    
    var options = {
        position: new google.maps.LatLng(-36.88846,174.915133),
        icon: "http://www.google.com/favicon.ico"
    };
    var marker = new google.maps.Marker(options);
    marker.setMap(map);
    
    
    var points = [
      new google.maps.LatLng(-36.88846,174.915133),
      new google.maps.LatLng(-36.9,174.915133),
      new google.maps.LatLng(-36.9,174.96),
      new google.maps.LatLng(-36.88846,174.915133)
    ];

    var polyline = new google.maps.Polyline({
      path: points,
      strokeColor: "#FF0000",
      strokeWeight: 2
    });
    polyline.setMap(map);
}
