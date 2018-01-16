function main(){
    var weekDay = new Date().getDay();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    
    var dayTime = hours + ":" + minutes + ":" + seconds;
    var day;
    
    switch(weekDay){
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
    }
    
    document.getElementById("result").innerHTML = "Today is " + day + " " + dayTime;
}

 document.getElementById("reset").onclick = function(){
    document.getElementById("result").innerHTML = " ";
}

