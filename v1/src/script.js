let cookies = 0
let multiplier = 1

// document.getElementById("cookieCount").textContent = `${cookies} cookies`

//increase cookies on click
document.getElementById("cookie").onclick = function() {
	cookies += multiplier
	cookies = Math.round(cookies)
	document.getElementById("cookieCount").textContent = `${cookies} cookies`
	return cookies
}

//increase multiplier per click
document.getElementById("invest").onclick = function() {
	multiplier *= 1.25
	multiplier = Math.round(multiplier * 100) / 100
	document.getElementById("multiplier").textContent = `multiplier: ${multiplier}x`
	return multiplier
}

function autoclicker () {
	var worker = new Worker
}