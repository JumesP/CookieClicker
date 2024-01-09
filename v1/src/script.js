let cookies = 1000000000
let multiplier = 1
let increase = 1.25
let num = 0

const amount_invested = [0, 0, 0, 0, 0, 0, 0]
const investment_values = [0, 0.1, 1, 10, 100, 1000, 10000]

document.getElementById("cookieCount").textContent = `${cookies} cookies`
document.getElementById("multiplier").textContent = `${multiplier}x Multiplier`

//basic sleeping function
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

//update display
function updateStats() {
	//calculate how much is being autoclocked
	let autoclicker = 0
	for (var i = 0; i < amount_invested.length; i++) {
		if (amount_invested[i] > 0) {
			autoclicker += amount_invested[i] * investment_values[i]
			if (document.getElementById("autoclick").style.display === "") {
				console.log("HI")
				document.getElementById("autoclick").style.display = "block"
			}
		}
	}

	autoclicker = Math.floor(autoclicker * 100)/100
	document.getElementById("multiplier").textContent = `multiplier: ${multiplier}x`
	document.getElementById("increase").textContent = `increase: ${increase}x`
	document.getElementById("cookieCount").textContent = `${Math.floor(cookies)} cookie`
	document.getElementById("autoclick").textContent = `${autoclicker} cookies per second`
}

setInterval(function () {updateStats()}, 10)

//not enough money function
function notEnoughMoney(button) {
	var original = document.getElementById("investment1_button").textContent
	document.getElementById(button).textContent = "Not Enough"
	sleep(2000).then(() => document.getElementById(button).textContent = original)
}

function increaseCookies(num) {
	cookies+=investment_values[num]
}

//increase cookies on click
document.getElementById("cookie").onclick = function() {
	cookies = Math.round((cookies+multiplier) * 10000) / 10000 // actual amount of cookies
	document.getElementById("cookieCount").textContent = `${Math.floor(cookies)} cookie` // only show floor
	return cookies
}

//increase multiplier per click
document.getElementById("investment1_button").onclick = function() {
	if (cookies >= 20) {
		multiplier = Math.round((multiplier *= increase) * 100) / 100
		increase = ((increase - 1)/1.25)+1
		cookies -= 20
	} else {
		notEnoughMoney("investment1_button")
	}
}

document.getElementById("investment2_button").onclick = function() {
	if (cookies > 200) {
		num = 1
		setInterval(function () {
			increaseCookies(num)
		}, 1000)
		amount_invested[num] += 1
		cookies -= 200
	} else {
		notEnoughMoney("investment2_button")
	}
}

document.getElementById("investment3_button").onclick = function() {
	if (cookies >= 2000) {
		num = 2
		setInterval(function () {
			increaseCookies(num)
		}, 1000)
		amount_invested[num] += 1
		cookies -= 2000
	} else {
		notEnoughMoney("investment3_button")
	}
}

document.getElementById("investment4_button").onclick = function() {
	if (cookies >= 20000) {
		num = 3
		setInterval(function () {
			increaseCookies(num)
		}, 1000)
		amount_invested[num] += 1
		cookies -= 20000
	} else {
		notEnoughMoney("investment4_button")
	}
}

document.getElementById("investment5_button").onclick = function() {
	if (cookies >= 200000) {
		num = 4
		setInterval(function () {
			increaseCookies(num)
		}, 1000)
		amount_invested[num] += 1
		cookies -= 200000
	} else {
		notEnoughMoney("investment5_button")
	}
}

document.getElementById("investment6_button").onclick = function() {
	if (cookies >= 2000000) {
		num = 5
		setInterval(function () {increaseCookies(num)}, 1000)
		amount_invested[num] += 1
		cookies -= 2000000
	} else {
		notEnoughMoney("investment6_button")
	}
}

document.getElementById("investment7_button").onclick = function() {
	if (cookies >= 20000000) {
		num = 6
		setInterval(function () {
			increaseCookies(num)
		}, 1000)
		amount_invested[num] += 1
		cookies -= 2000000
	} else {
		notEnoughMoney("investment7_button")
	}
}

