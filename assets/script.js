function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: { lat: 38.8814, lng: -94.8191 },
      type: ["restaurant"]
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function () {
      geocodeAddress(geocoder, map);
  });
}
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
      }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
  });
}
;
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === 'OK') {
          resultsMap.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
          });
      } else {
          alert('Geocode was not successful for the following reason: ' + status);
      }
  });
}
navigator.geolocation.getCurrentPosition(getLatLon);

function getLatLon(position) {
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
  console.log("Latitude is "+latitude);
  console.log("Longitude is "+longitude);
}