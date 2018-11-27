$(document).ready(function() {
    var alerted = sessionStorage.getItem('groupsAlert') || '';

    if (alerted != 'yes') {
     swal('Updating Groups', 'Click on any group to see members and add individuals!', 'success')
     sessionStorage.setItem('groupsAlert','yes');
    }

    updateGroups(); 
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
});

function addGroup1Member(newName) {
  var newGroup = {'name': newName, 'pos': {lat: 32.867, lng: -120.218}};
  var group1 = JSON.parse(sessionStorage.getItem('group1'));
  group1.push(newGroup);
  sessionStorage.setItem("group1", JSON.stringify(group1));

  var node = document.createElement("LI");
  textnode = document.createTextNode(newName);
  node.appendChild(textnode);
  document.getElementById("group1template").appendChild(node);
}

function addGroup2Member(newName) {
  var newGroup = {'name': newName, 'pos': {lat: 32.867, lng: -120.218}};
  var group2 = JSON.parse(sessionStorage.getItem('group2'));
  group2.push(newGroup);
  sessionStorage.setItem("group2", JSON.stringify(group2));

  var node = document.createElement("LI");
  textnode = document.createTextNode(newName);
  node.appendChild(textnode);
  document.getElementById("group2template").appendChild(node);
}

function addGroup3Member() {
  var newGroup = {'name': newName, 'pos': {lat: 32.867, lng: -120.218}};
  var group3 = JSON.parse(sessionStorage.getItem('group3'));
  group3.push(newGroup);
  sessionStorage.setItem("group3", JSON.stringify(group3));
  
  var node = document.createElement("LI");
  textnode = document.createTextNode(newName);
  node.appendChild(textnode);
  document.getElementById("group3template").appendChild(node);
}

function updateGroups() {
    var group1 = sessionStorage.getItem('group1') || '';
    if(group1 == '') {
      sessionStorage.setItem('group1', JSON.stringify(fakeGroup1));
      group1 = fakeGroup1; 
    } else {
      group1 = JSON.parse(group1);
    }

    for(i = 0; i < group1.length; i++) {
      var node = document.createElement("LI");
      textnode = document.createTextNode(group1[i].name);
      node.appendChild(textnode);
      document.getElementById("group1template").appendChild(node);
    }

    var group2 = sessionStorage.getItem('group2') || '';
    if(group2 == '') {
      group2 = fakeGroup2; 
    } else {
      group2 = JSON.parse(group2);
    }

    for(i = 0; i < group2.length; i++) {
      var node = document.createElement("LI");
      textnode = document.createTextNode(group2[i].name);
      node.appendChild(textnode);
      document.getElementById("group2template").appendChild(node);
    }

    var group3 = sessionStorage.getItem('group3') || '';
    if(group3 == '') {
      group3 = fakeGroup3; 
    } else {
      group3 = JSON.parse(group3);
    }

    for(i = 0; i < group3.length; i++) {
      var node = document.createElement("LI");
      textnode = document.createTextNode(group3[i].name);
      node.appendChild(textnode);
      document.getElementById("group3template").appendChild(node);
    }
}

function removeForm() {
  document.getElementById('id01').style.display='none';
  return false;
}
