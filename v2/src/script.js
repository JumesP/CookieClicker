// localStorage.clear()
if (localStorage.getItem("cookies") === null) { // if there is no save data
	var cookies = 0
	var multiplier = 1
	var increase = 1.25

	// Statistics
	var totalEarnt = 0
	var totalCookieClicks = 0
	var totalFromAuto = 0
	var totalSpent = 0
	var earningAuto = 0

	var currentPageInvest = 0 // current investment page
	var amount_invested = [0, 0, 0, 0, 0, 0, 0]
	var investment_values = [0, 0.1, 1, 10, 100, 1000, 10000]

} else {
	var cookies = (Math.round(parseFloat(localStorage.getItem("cookies"))*10000))/10000
	var multiplier = parseFloat(localStorage.getItem("multiplier"))
	var increase = parseFloat(localStorage.getItem("increase"))

	// Statistics
	var totalEarnt = parseFloat(localStorage.getItem("totalEarnt"))
	var totalCookieClicks = parseInt(localStorage.getItem("totalCookieClicks"))
	var totalFromAuto = parseFloat(localStorage.getItem("totalFromAuto"))
	var totalSpent = parseFloat(localStorage.getItem("totalSpent"))
	var earningAuto = parseFloat(localStorage.getItem("earningAuto"))

	var currentPageInvest = parseInt(localStorage.getItem("currentPageInvest")) // current investment page
	var amount_invested = JSON.parse(localStorage.getItem("amount_invested"))
	var investment_values = JSON.parse(localStorage.getItem("investment_values"))

	console.log(typeof totalEarnt)
}

var num = 0 // used for investing buttons

document.getElementById("cookieCount").textContent = `${cookies} cookies`
document.getElementById("multiplierdash").textContent = `${multiplier}x Multiplier`

//basic sleeping function   
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

function spend(cost) {
	cookies -= cost
	totalSpent += cost
}

//update display
function updateStats() { 
	//calculate how much is being autoclocked
	let autoclicker = 0
	for (var i = 0; i < amount_invested.length; i++) {
		if (amount_invested[i] > 0) {
			autoclicker += amount_invested[i] * investment_values[i]
			}
		}
	
	// displaying data
	autoclicker = Math.floor(autoclicker * 10000) / 10000
	document.getElementById("multiplierdash").textContent = `${multiplier}x Multiplier`
	document.getElementById("increase").textContent = `increase: ${increase}x`
	document.getElementById("cookieCount").textContent = `${Math.floor(cookies)} cookies`
	document.getElementById("autoclick").textContent = `${autoclicker} cookies per second`
		//update multiplier

	document.getElementById("totalamount").textContent = `amount earnt total: $${Math.floor(totalEarnt*100)/100}`
	document.getElementById("totalclicks").textContent = `amount of clicks total: ${totalCookieClicks}`
	document.getElementById("generatedauto").textContent = `amount earnt automatically total: $${Math.floor(totalFromAuto * 1000)/1000}`
	document.getElementById("spent").textContent = `amount spent: $${totalSpent}`
	document.getElementById("amountInvested").textContent = `amount invested: ${amount_invested}`

	// storing data
	localStorage.setItem("cookies", cookies.toString())
	localStorage.setItem("multiplier", multiplier.toString())
	localStorage.setItem("increase", increase.toString())
	
	let string = JSON.stringify(amount_invested)
	localStorage.setItem("amount_invested", string)
	string = JSON.stringify(investment_values)
	localStorage.setItem("investment_values", string)

	localStorage.setItem("totalEarnt", totalEarnt)
	localStorage.setItem("totalCookieClicks",totalCookieClicks.toString())
	localStorage.setItem("totalFromAuto", totalFromAuto.toString())
	localStorage.setItem("totalSpent", totalSpent.toString())
	localStorage.setItem("earningAuto", earningAuto.toString())

	localStorage.setItem("currentPageInvest", currentPageInvest.toString())
	console.log("stats updated")
}

// function toadd() {
// 	let toadd
// 	for (var a = 0; a < amount_invested.length; a++) {
// 		toadd += amount_invested[num] * investment_values[num]
// 	}
// 	console.log(toadd)
// 	return toadd
// }

function increaseCookies() {
	let toadd = 0
	console.log(amount_invested)
	for (let x = 0; x < 7; x++) {
		toadd += parseInt(amount_invested[x]) * parseInt(investment_values[x])
	}
	earningAuto = toadd
	totalFromAuto += toadd
	totalEarnt += toadd
}

var statsUpdate = setInterval(updateStats, 10)
var cookieincrease = setInterval(increaseCookies, 1000)



//not enough money function
function notEnoughMoney(button) {
	var original = document.getElementById("investment1_button").textContent
	document.getElementById(button).textContent = "Not Enough"
	sleep(2000).then(() => document.getElementById(button).textContent = original)
}



//increase cookies on click
document.getElementById("cookie").onclick = function() {
	cookies = Math.round((cookies+multiplier) * 10000) / 10000 // actual amount of cookies
	totalEarnt += multiplier
	document.getElementById("cookieCount").textContent = `${Math.floor(cookies)} cookie` // only show floor
	totalCookieClicks += 1

}

//increase multiplier per click
document.getElementById("investment1_button").onclick = function() {
	if (cookies >= 20) {
		num = 0
		amount_invested[num] += 1
		multiplier = Math.round((multiplier *= increase) * 100) / 100
		increase = ((increase - 1)/1.25)+1
		spend(20)
	} else {
		notEnoughMoney("investment1_button")
	}
}

document.getElementById("investment2_button").onclick = function() {
	if (cookies > 200) {
		num = 1
		amount_invested[num] += 1
		spend(200)
	} else {
		notEnoughMoney("investment2_button")
	}
}

document.getElementById("investment3_button").onclick = function() {
	if (cookies >= 2000) {
		num = 2
		amount_invested[num] += 1
		spend(2000)
	} else {
		notEnoughMoney("investment3_button")
	}
}

document.getElementById("investment4_button").onclick = function() {
	if (cookies >= 20000) {
		num = 3
		amount_invested[num] += 1
		spend(20000)
	} else {
		notEnoughMoney("investment4_button")
	}
}

document.getElementById("investment5_button").onclick = function() {
	if (cookies >= 200000) {
		num = 4
		amount_invested[num] += 1
		spend(200000)
	} else {
		notEnoughMoney("investment5_button")
	}
}

document.getElementById("investment6_button").onclick = function() {
	if (cookies >= 2000000) {
		num = 5
		amount_invested[num] += 1
		spend(2000000)
	} else {
		notEnoughMoney("investment6_button")
	}
}

document.getElementById("investment7_button").onclick = function() {
	if (cookies >= 20000000) {
		num = 6
		amount_invested[num] += 1
		spend(20000000)
	} else {
		notEnoughMoney("investment7_button")
	}
}

function displayEdit(input, change) {
	document.getElementById(input).style.display = change
}

document.getElementById("next").onclick = function() {
	let listOfScroll = ["investments", "statistics", "other"]

	displayEdit(listOfScroll[currentPageInvest], "none")
	
	currentPageInvest += 1
	if (currentPageInvest > 2) {
		currentPageInvest -= 3
	}

	document.getElementById("investments_header").textContent = listOfScroll[currentPageInvest][0].toUpperCase() + listOfScroll[currentPageInvest].slice(1)
	displayEdit(listOfScroll[currentPageInvest], "flex")
}

document.getElementById("back").onclick = function() {
	let listOfScroll = ["investments", "statistics", "other"]

	displayEdit(listOfScroll[currentPageInvest], "none")
	currentPageInvest -= 1
	if (currentPageInvest < 0) {
		currentPageInvest += 3
	}

	document.getElementById("investments_header").textContent = listOfScroll[currentPageInvest][0].toUpperCase() + listOfScroll[currentPageInvest].slice(1)
	displayEdit(listOfScroll[currentPageInvest], "flex")
}


document.getElementById("devclick").onclick = function() {
	if (document.getElementById("cheatmode").value == "yesplease") {
		displayEdit("cheatmode", "none")
		displayEdit("devclick", "none")
		displayEdit("devtools", "flex")

	} else {
		document.getElementById("devclick").textContent = "Incorrect, dont try again!"
		sleep(2000).then(() => document.getElementById("devclick").textContent = "Submit or whatever")
	}
}

document.getElementById("devtool1").onclick = function() {
	cookies = 0
	multiplier = 1
	amount_invested = [0, 0, 0, 0, 0, 0, 0]
}
document.getElementById("devtool2").onclick = function() {
	cookies = 1000000
	totalEarnt += 1000000
}
document.getElementById("devtool3").onclick = function() {
	cookies = 1000000000
	totalEarnt += 1000000000
}
document.getElementById("devtool4").onclick = function() {
	multiplier *= 1000
}
document.getElementById("devtool5").onclick = function() {
	amount_invested[5] + 1
}
document.getElementById("devtool6").onclick = function() {
	clearInterval(statsUpdate)
	clearInterval(cookieincrease)
	sleep(2000).then(() => localStorage.clear())
	localStorage.clear()
}
document.getElementById("devtool7").onclick = function() {
	clearInterval(statsUpdate)
	clearInterval(cookieincrease)
}