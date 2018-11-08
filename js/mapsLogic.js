      var map, infoWindow;

      var group1 = [
          {'name': 'Sarah Feteih', 'pos': {lat: 32.957580, lng: -117.130050}},
      ];

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });

        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('My Location');
            infoWindow.open(map);
            map.setCenter(pos);

          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        
        google.maps.event.addDomListener(document.getElementById('addGroup1'),
                                             'click', function () {
            for (var i = 0; i < group1.length; i++) {
              var newInfo = new google.maps.InfoWindow;
              newInfo.setPosition(group1[i].pos);
              newInfo.setContent(group1[i].name);
              newInfo.open(map);
            } 
        }); 

        google.maps.event.addDomListener(document.getElementById('addGroup2'),
                                             'click', function () {
            for (var i = 0; i < group2.length; i++) {
              var newInfo = new google.maps.InfoWindow;
              newInfo.setPosition(group2[i].pos);
              newInfo.setContent(group2[i].name);
              newInfo.open(map);
            } 
        }); 

        google.maps.event.addDomListener(document.getElementById('addGroup3'),
                                             'click', function () {
            for (var i = 0; i < group3.length; i++) {
              var newInfo = new google.maps.InfoWindow;
              newInfo.setPosition(group3[i].pos);
              newInfo.setContent(group3[i].name);
              newInfo.open(map);
            } 
        }); 
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}