let output = document.getElementsByClassName('countdown')[0];

let eventDate = "January 15, 2021";
let eventTime = "19.00".split(".");
let convertTime = eventTime[0] + ":" + eventTime[1] + ":00";
//January 15, 2021 19:00:00
let eventMS = eventDate + " " + convertTime;

console.log(eventMS)

let start = new Date(eventMS).getTime(); //This can be taken from the Wordpress

const day = (1000 * 60 * 60 * 24);
const hour = (1000 * 60 * 60);
const minute = (1000 * 60);
const second = (1000);


let repeat = setInterval(function () {
	
	let present = new Date().getTime();
	let difference = start - present;

	let d = Math.floor(difference / day);
	let h = Math.floor((difference % day) / hour);
	let m = Math.floor((difference % hour) / minute);
	let s = Math.floor((difference % minute) / second);
// 	console.log(present);
	output.innerHTML = d + "d : " + h + "h : " + m + "m : " + s + "s ";
	
	if (difference < 0) {
    clearInterval(repeat);
    output.innerHTML = "The Festival is Now!";
  }
}, 1000);

