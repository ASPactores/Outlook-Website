var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("openButton").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("openButton").style.visibility = "visible";
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "dropdown") {
    x.className += " responsive";
  } else {
    x.className = "dropdown";
  }
}

function toggleForm() {
  var blur1 = document.getElementById('blurHead');
  var blur2 = document.getElementById('blurBody');
  var blur3 = document.getElementById('blurFooter');
  var popup = document.getElementById('myForm');
  blur1.classList.toggle('active');
  blur2.classList.toggle('active');
  blur3.classList.toggle('active');
  popup.classList.toggle('active');
  console.log(blur3);
}
