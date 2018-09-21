// google maps

function initMap() {
    var myLatLng = { lat: 46.957543, lng: 31.992026};

    // Create a map object and specify the DOM element
    // for display.
    var map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 10
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      icon: 'assets/img/map-pin.png'
    });
  };