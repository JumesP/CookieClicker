let cookies = 0
let multiplier = 1
let autoclicker = 0
let investment2_count = 0
const worker = new Worker('./src/worker.js')

document.getElementById("cookieCount").textContent = `${cookies} cookies`
document.getElementById("multiplier").textContent = `${multiplier}x Multiplier`

//basic sleeping function
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

//increase cookies on click
document.getElementById("cookie").onclick = function() {
	cookies = Math.round((cookies+multiplier) * 10000) / 10000 // actual amount of cookies
	document.getElementById("cookieCount").textContent = `${Math.floor(cookies)} cookie` // only show floor
	return cookies
}

//increase multiplier per click
document.getElementById("investment1_button").onclick = function() {
	if (cookies > 20) {
		multiplier = Math.round((multiplier *= 1.25) * 100) / 100
		cookies -= 20
		document.getElementById("multiplier").textContent = `multiplier: ${multiplier}x`
		document.getElementById("cookieCount").textContent= `${Math.floor(cookies)} cookie`
		return multiplier
	} else {
		document.getElementById("invest").textContent = "Not Enough"
		sleep(2000).then(() => document.getElementById("invest").textContent = "invest")
	}
}

document.getElementById("investment2_button").onclick = function() {
	worker.postMessage(cookies, investment2_count)
	
}



// function autoclicker () {
// 	var worker = new Worker
// }