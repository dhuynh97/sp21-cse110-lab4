function printEverySecond() {
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}

var t = setInterval(printEverySecond, 1000);