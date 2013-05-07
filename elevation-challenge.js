function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

  
    var geocoder = new google.maps.Geocoder();
    var bounds = new google.maps.LatLngBounds();
    geocoder.geocode({address: "Regatta Hotel"}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var hotel = results[0].geometry.location;
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
            bounds.extend(marker.getPosition());
            map.fitBounds(bounds);
            geocoder.geocode({address: "Brisbane"}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var marker = new google.maps.Marker({
                      map: map,
                      position: results[0].geometry.location
                    });
                    bounds.extend(marker.getPosition());
                    map.fitBounds(bounds);
                    var loc = results[0].geometry.location;
                    
                    
                        
                  var path = [loc,hotel];
                
                  var elevation_service = new google.maps.ElevationService();
                  var request = {
                    path: path,
                    samples: 256
                  };
                
                  elevation_service.getElevationAlongPath(request, callback);
                    
                } else {
                    window.console.log('failed to geocode address: '  + status);
                }
            });
        } else {
            window.console.log('failed to geocode address: '  + status);
        }
    });
}

function callback(results, status) {
  if (status != google.maps.ElevationStatus.OK) {
    alert("Oh no!");
    return;
  }
  var total = 0;
  for (var i = 1; i < results.length; ++i) {
    //window.console.log(results[i].elevation);
    total += Math.max(0,results[i].elevation-results[i-1].elevation);
    //window.console.log(total);
  }
  window.console.log("Net elevation");
  window.console.log(total);
}
