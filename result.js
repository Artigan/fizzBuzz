module.exports = function fizzBuzz(val) {
	if (val % 15 == 0) {
	    return "fizzbuzz";
	}
	if (val % 3 == 0) {
	    return "fizz";
	}
	if (val % 5 == 0) {
	    return "buzz";
	}
	return val.toString();
}
