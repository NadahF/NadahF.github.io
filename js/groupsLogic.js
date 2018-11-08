
      var group1 = [
          {'name': 'Sarah Feteih', 'pos': {lat: 32.820612, lng: -117.165430}},
          {'name': 'Salah Feteih', 'pos': {lat: 32.820477, lng: -117.165564},
          {'name': 'Sohad Khafagy', 'pos': {lat: 32.820084, lng: -117.165362}},
          {'name': 'Yara Feteih', 'pos': {lat: 32.820612, lng: -117.165430}},
          {'name': 'Nadah Feteih', 'pos': {lat: 32.820477, lng: 117.165564}},
      ];

      var group2 = [
          {'name': 'Lina Bar', 'pos': {lat: 32.867, lng: -117.218}},
          {'name': 'Hiba Dahbour', 'pos': {lat: 32.867, lng: -117.218}},
          {'name': 'Maerah Ali', 'pos': {lat: 32.867, lng: -117.218}},
          {'name': 'Ola Abu', 'pos': {lat: 32.864, lng: -117.223}},
          {'name': 'Noor Dahbour', 'pos': {lat:  32.871, lng: -117.211 }}
      ];

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
