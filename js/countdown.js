// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = "<div>" + Math.floor(distance / (1000 * 60 * 60 * 24)) + " <span>Day</span> " + "</div>";
    var hours = "<div>" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " <span>Hour</span> " + "</div>";
    var minutes = "<div>" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " <span>Min</span> " + "</div>";
    var seconds = "<div>" + Math.floor((distance % (1000 * 60)) / 1000) + " <span>Sec</span> " + "</div>";
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = days + hours + minutes + seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);