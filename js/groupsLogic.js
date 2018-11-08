
      var group1 = [
          {'name': 'Sarah Feteih', 'pos': {lat: -34.397, lng: 150.644}},
          {'name': 'Salah Feteih', 'pos': {lat: -34.397, lng: 150.644}},
      ];
      

var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
	    	acc[i].addEventListener("click", function() {
	        /* Toggle between adding and removing the "active" class,
	        to highlight the button that controls the panel */
	        this.classList.toggle("active");

	        /* Toggle between hiding and showing the active panel */
	        var panel = this.nextElementSibling;
	        if (panel.style.display === "block") {
	            panel.style.display = "none";
	        } else {
	            panel.style.display = "block";
	        }
    	});
		}

		function addGroup1() {
           for (var i = 0; i < group1.length; i++) {
              var info = new google.maps.InfoWindow;
              info.setPosition(group1[i].pos);
              info.setContent(group1[i].name);
              infoWindowGroups.open(map);
           }      
      }

