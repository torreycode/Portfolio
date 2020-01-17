var i = 0;
var txt = 'Torrey Thomas';
var speed = 50;

document.addEventListener('DOMContentLoaded', function() {
  if (i < txt.length) {
    document.getElementById("header-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  alert('okay');
});