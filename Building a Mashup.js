var map;
var bounds;

function initialize() {
    // Make a request to the API. '/plus' redirects to:
    // https://www.googleapis.com/plus/v1/people/113590416237988391252/activities/public?key=key
    jQuery.ajax({
      url: '/plus',
      dataType: 'jsonp',
      success: requestComplete
    });
    bounds = new google.maps.LatLngBounds();
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-35.27799,149.128987),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
}

function requestComplete(response) {
    for (var i in response.items) {
        var item = response.items[i];
        if (item.geocode == undefined) continue;
        var coords = item.geocode.split(' ');
        var point = new google.maps.LatLng(coords[0],coords[1]);
        var marker = new google.maps.Marker({
            position: point
        });
        marker.setMap(map);
        bounds.extend(point);
    }
    map.fitBounds(bounds);
}


