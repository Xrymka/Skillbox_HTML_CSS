/* Map */
function initMap() {
  var coordinates = {lat: 47.212325, lng: 38.933663},

      map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates
      }),

      marker = new google.maps.Marker({
          position: coordinates,
          map: map
      });
}

image = '../location.jpg',
marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
});
