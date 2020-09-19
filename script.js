
function calculateTime() {
    var currentDay = new Date;
    var monday = currentDay.getDate() - currentDay.getDay()
    var nextMonday = monday + 8;
    var nextLesson = new Date;
    nextLesson.setDate(nextMonday);
    nextLesson.setHours(11);
    nextLesson.setMinutes(0);
    nextLesson.setSeconds(0);
    

    var currentDateTime = currentDay.getTime();
    var deadline = nextLesson.getTime();
    var remainingTime = deadline - currentDateTime;
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