// onmessage = function(message) {
// 	console.log("bello")
// }

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

onmessage = function(cookies, investment_count) {
	cookies += 8
	console.log("Bello")
	console.log(cookies)
	document.getElementById("cookieCount").textContent= `${Math.floor(cookies)} cookie`
	// postMessage()
	// while (true) {
	// 	sleep(1000).then(() => console.log("Hello"))
	// }
	// postMessage(cookies)

} // same function in main js code for returned response