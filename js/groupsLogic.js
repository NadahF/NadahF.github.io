$(document).ready(function() {
    for(i = 0; i < group1.length; i++) {
      var node = document.createElement("LI");
      textnode = document.createTextNode(group1[i].name);
      node.appendChild(textnode);
      document.getElementById("group1template").appendChild(node);
    }

    for(i = 0; i < group2.length; i++) {
      var node = document.createElement("LI");
      textnode = document.createTextNode(group2[i].name);
      node.appendChild(textnode);
      document.getElementById("group2template").appendChild(node);
    }

    for(i = 0; i < group3.length; i++) {
      var node = document.createElement("LI");
      textnode = document.createTextNode(group3[i].name);
      node.appendChild(textnode);
      document.getElementById("group3template").appendChild(node);
    }


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

function addGroup1Member() {
    group1.append(document.getElementById('member1name').value);
}

function addGroup2Member() {
    group2.append(document.getElementById('member2name').value);
}

function addGroup3Member() {
    group3.append(document.getElementById('member3name').value);
}


