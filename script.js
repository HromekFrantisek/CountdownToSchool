
function calculateTime() {
    //Sunday fix (https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date)
    var currentDay = new Date();
    var day = currentDay.getDay() || 7; // Get current day number, converting Sun. to 7
    if( day !== 1 )                     // Only manipulate the date if it isn't Mon.
    
    {
        currentDay.setHours(-24 * (day - 1)); 
    }    

    var nextLesson = new Date();
    nextLesson.setDate(nextLesson.getDate());
    nextLesson.setHours(11);
    nextLesson.setMinutes(0);
    nextLesson.setSeconds(0);

    

    var today = (new Date).getTime();
    var deadline = nextLesson.getTime();
    var remainingTime = deadline - today;
    var days = Math.floor(remainingTime / (1000 * 60 * 60 *24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 *60)) / 1000);
    var dayTextCZ;
    if (days == 1) {
       dayTextCZ = " den "
    }
    else if (days > 1 && days < 5) {
        dayTextCZ = " dny "
    }
    else {
        dayTextCZ = " dní "
    }

    document.getElementById("countdown").innerHTML = days + dayTextCZ + hours + " hodin " + minutes + " minut " + seconds + " sekund "
    
}

window.onload = function () {
    window.setInterval(function(){
        calculateTime();
      }, 1000);
}