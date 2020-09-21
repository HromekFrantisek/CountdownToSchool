
function calculateTime() {
    var currentDay = new Date();
    var day = currentDay.getDay() || 7; // Get current day number, converting Sun. to 7

    var nextLesson = new Date();

    //Pokud je pondeli po 11 hodine pridame k datumu tyden
    if(day == 1 && currentDay.getHours() > 10) {

        nextLesson.setDate(currentDay.getDate() + 7);
    }

    //Pokud je pondeli pred 11 hodinou nepridavame k datumu zadne dny
    else if(day == 1 && currentDay.getHours() < 11) {
        nextLesson.setDate(currentDay.getDate());
    }

    else if(day == 7) {
        nextLesson.setDate(currentDay.getDate() + 1);
    }
    //Pokud neni pondeli pridame k datumu pocet dnu k dalsimu pondeli
    else {
        var diff = 7 - day + 1;
        nextLesson.setDate(currentDay.getDate() + diff);
    }
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