function clock(){
let x = new Date();
let h = x.getHours();
let m = x.getMinutes();
let s = x.getSeconds();
let zone = "AM";
let weekday = [7];
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let date = x.getDate();
let y = x.getFullYear();
let month = [12];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "Novenber";
month[11] = "December";

let mnth = month[x.getMonth()];
let day = weekday[x.getDay()];


if(h>11){
    zone = "PM";
}

if(h == 0){
    h = 12;
    zone = "AM";
}

if (h>12) {
    h = h - 12;    
}

h = (h<10) ? "0" + h : h;
m = (m<10) ? "0" + m : m;
s = (s<10) ? "0" + s : s;
let time = h + " : " + m + " : " + s + " " + zone + " (" + date + " - " + mnth + " - " + y + ", " + day + ")";

document.getElementById("clock").innerHTML = time;

setInterval(clock, "1000");
}
clock();