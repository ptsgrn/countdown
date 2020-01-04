var countDownDate = new Date("Jan 9, 2020 23:59:59").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("output").innerHTML = days + "<br /> " + hours + "<br/>"
  + minutes + "<br/> " + seconds + " <br />";
  if (distance < 0) {
    clearInterval(x);
  }
}, 500);