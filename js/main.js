/******* Loader Function */
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

//for responsiveness
const menuButton = document.getElementById('menuButton');
const cancelButton = document.getElementById('cancelButton');
const sideNav = document.getElementById('responsivenavlinks');

menuButton.addEventListener('click', () => {
    sideNav.style.height = "100%";
});
cancelButton.addEventListener('click', () =>{
    sideNav.style.height = "0%";
});

var i = 0;
var txt = 'ENDOWED P is a visionary media production agency, empowering storytellers with a passion for cinematic excellence. With extensive expertise in cinematography, videography, video editing, and drone coverage, our creative team brings stories to life with captivating visual narratives, elevating your message and leaving a lasting impact.';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}