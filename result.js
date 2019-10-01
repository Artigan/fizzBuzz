module.exports = function fizzBuzz(n) {
	if (n % 15 == 0) {
	    return "fizzbuzz";
	}
	if (n % 3 == 0) {
	    return "fizz";
	}
	if (n % 5 == 0) {
	    return "buzz";
	}
	return n.toString();
}

////////////////////////// - LA SOLUTION DU DOJO 01/10/2019 - ///////////////////////////////

module.exports = function fizzBuzz(val) {
    if (val % 15 == 0 ){
        console.log('fizzbuzz');
        return 'fizzBuzz';
    }
    if (val % 3 == 0) {
        console.log("fizz");
        return 'fizz';
    }
    if (val % 5 == 0) {
        console.log("buzz");
        return 'buzz';
    }
    else 
        console.log(val);
        return val;
}