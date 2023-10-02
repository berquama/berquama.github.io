
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("openButton").style.display = "none";
  document.getElementById("closeButton").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "100px";
  document.getElementById("main").style.marginLeft= "100px";
  document.body.style.backgroundColor = "white";
  document.getElementById("openButton").style.display = "block";
  document.getElementById("closeButton").style.display = "none";
}
