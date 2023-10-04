function openNav() {
	hideNavImages();
	expandNav();
	changeButtonsOpen();
}
function closeNav() {
	showNavImages();
	shrinkNav();
	changeButtonsClose();
}

function changeButtonsClose() {
  document.getElementById("openButton").style.display = "block";
  document.getElementById("closeButton").style.display = "none";
}

function changeButtonsOpen() {
  document.getElementById("openButton").style.display = "none";
  document.getElementById("closeButton").style.display = "block";
}

function expandNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  var cols = document.getElementsByClassName('overlay');
  for(i = 0; i < cols.length; i++) {
    cols[i].style.opacity = '0.8';
  }
}

function shrinkNav() {
  document.getElementById("mySidenav").style.width = "100px";
  document.getElementById("main").style.marginLeft= "100px";
}

function hideNavImages() {
  var cols = document.getElementsByClassName('nav-image');
  for(i = 0; i < cols.length; i++) {
    cols[i].style.display = 'none';
  }
}
  
function showNavImages() {
  var cols = document.getElementsByClassName('nav-image');
  for(i = 0; i < cols.length; i++) {
    cols[i].style.display = 'block';
  }
}

	