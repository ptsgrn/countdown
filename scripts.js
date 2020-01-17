var countDownDate = new Date("20200608100623Z").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("output").innerHTML = '<span class="' + red(days) + zero(days) + "<label>DAY</label></span><br>" + '<span class="' + red(hours) + zero(hours) + "<label>HRS</label></span> <br>" + '<span class="' + red(minutes) + zero(minutes) + "<label>MIN</label></span><br>" + '<span class="' + red(seconds) + zero(seconds) + "<label>SEC</label></span>";
  if (distance < 0) {
    clearInterval(x);
document.getElementById("output").innerHTML = '<span class="ended all">00<br>00<br>00<br>00</span>';
  }

}, 1000);

function zero(num){
   if (num<10){
     return "0" + num;
   }else{
     return num;
  }
}

function red(num){
   if(num<=0){
     return 'ended">';
  }else{
     return 'active">';
   }
}
