let colors = ["\x1b[30m", "\x1b[31m", "\x1b[32m", "\x1b[33m", "\x1b[34m", "\x1b[35m"];

function rainbowConsole(){

}

module.exports = rainbowConsole;

/* ---------------------------Brians version--------------------------------- */

module.exports = [
	"\x1b[31m", // red
	"\x1b[33m", // yellow
	"\x1b[32m", // green
	"\x1b[36m", // cyan
	"\x1b[34m", // blue
	"\x1b[35m"  // magenta
]

function arrayIterator(symbol, index) {
	if (symbol == " ") {
		return " "
	}
	return `${colors[index % colors.length]}${symbol}\x1b[0m`
}

module.exports = function(message) {
	let symbols = message.split("")
	console.log(symbols.map(arrayIterator).join(""))
}
