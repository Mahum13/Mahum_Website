function adjustOnload() {
  if (window.innerWidth < 982) {
    $('.openSidenav').css('display', 'block');
    $('.navbar').css('display', 'none');
  } else {
    $('.navbar').css('display', 'inline-block');
    $('.openSidenav').css('display', 'none');
  }
}

function openNav() {
  document.getElementById("sidenavbar").style.width = "75%";
}

function closeNav() {
  document.getElementById("sidenavbar").style.width = "0";
}

function openSidenavDrop(container, openBtn, closeBtn) {
  document.getElementById(container).style.display = "block";
  document.getElementById(openBtn).style.display ="none";
  document.getElementById(closeBtn).style.display = "inline-block";
}

function closeSidenavDrop(container, openBtn, closeBtn) {
  document.getElementById(container).style.display = "none";
  document.getElementById(openBtn).style.display = "inline-block";
  document.getElementById(closeBtn).style.display = "none";

}

function resizeNavbar() {
  window.onresize = function() {
    if (window.innerWidth < 982) {
      $('.navbar').css('display', 'none');
      $('.openSidenav').css('display', 'block');

    } else {
      $('.navbar').css('display', 'inline-block');
      $('.openSidenav').css('display', 'none');

    }
  }
}

function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.style.border = "1px solid black";
  modal.style.margin = "200px";
  modal.style.height = "600px";
  modal.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("vidSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) { slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
