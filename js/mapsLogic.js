      var map, infoWindow;

      var group1 = [
          {'name': 'Sarah Feteih', 'pos': {lat: 32.820612, lng: -117.165430}},
          {'name': 'Salah Feteih', 'pos': {lat: 32.820477, lng: -117.165564}},
          {'name': 'Sohad Khafagy', 'pos': {lat: 32.820084, lng: -117.165362}},
          {'name': 'Yara Feteih', 'pos': {lat: 32.820612, lng: -117.165430}},
          {'name': 'Nadah Feteih', 'pos': {lat: 32.820477, lng: -117.165564}},
      ];
      var group1InfoWindows = new Array(); 

      var group2 = [
          {'name': 'Lina Bar', 'pos': {lat: 32.867, lng: -117.218}},
          {'name': 'Hiba Dahbour', 'pos': {lat: 32.867, lng: -117.218}},
          {'name': 'Maerah Ali', 'pos': {lat: 32.867, lng: -117.218}},
          {'name': 'Ola Abu', 'pos': {lat: 32.864, lng: -117.223}},
          {'name': 'Noor Dahbour', 'pos': {lat:  32.871, lng: -117.211 }}
      ];
      var group2InfoWindows = new Array(); 

      var group3 = [
          {'name': 'Rachel', 'pos': {lat: 32.882, lng: -117.235}},
          {'name': 'Ross', 'pos': {lat: 32.881, lng: -117.237}},
          {'name': 'Monica', 'pos': {lat: 32.885, lng: -117.239}},
          {'name': 'Chandler', 'pos': {lat: 32.890, lng:-117.251 }},
          {'name': 'Pheobe', 'pos': {lat:32.860 , lng: -117.255}},
          {'name': 'Joey', 'pos': {lat: 32.869, lng: -117.231}},
          {'name': 'Janice', 'pos': {lat: 32.889, lng: -117.235}},
          {'name': 'Gunther', 'pos': {lat:32.871 , lng: -117.234}},
      ];

      var group3InfoWindows = new Array(); 

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
            group2InfoWindows.forEach(function (elem) {
                elem.close();
            });
            group3InfoWindows.forEach(function (elem) {
                elem.close();
            });
            
            for (var i = 0; i < group1.length; i++) {
              var newInfo = new google.maps.InfoWindow;
              group1InfoWindows.push(newInfo);
              newInfo.setPosition(group1[i].pos);
              newInfo.setContent(group1[i].name);
              newInfo.open(map);
            } 
        }); 

        google.maps.event.addDomListener(document.getElementById('addGroup2'),
                                             'click', function () {
            group1InfoWindows.forEach(function (elem) {
                elem.close();
            });
            group3InfoWindows.forEach(function (elem) {
                elem.close();
            });
            for (var i = 0; i < group2.length; i++) {
              var newInfo = new google.maps.InfoWindow;
              group2InfoWindows.push(newInfo);
              newInfo.setPosition(group2[i].pos);
              newInfo.setContent(group2[i].name);
              newInfo.open(map);
            } 
        }); 

        google.maps.event.addDomListener(document.getElementById('addGroup3'),
                                             'click', function () {
            group1InfoWindows.forEach(function (elem) {
                elem.close();
            });
            group2InfoWindows.forEach(function (elem) {
                elem.close();
            });
            for (var i = 0; i < group3.length; i++) {
              var newInfo = new google.maps.InfoWindow;
              group3InfoWindows.push(newInfo);
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

function group1Name() {    
      $("#groupName").html("Family");
}
function group2Name() {    
      $("#groupName").html("Friends");
}
function group3Name() {    
      $("#groupName").html("Roommates");
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